var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var notify = require('gulp-notify');
var combineCSS = require('combine-css');

var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var buffer = require('vinyl-buffer');

var browserSync = require('browser-sync');
var reload = browserSync.reload;
var historyApiFallback = require('connect-history-api-fallback')
const imagemin = require('gulp-imagemin');
//const pngquant = require('imagemin-pngquant');
var minifyHTML = require('gulp-minify-html');
var ghPages = require('gulp-gh-pages');
var del = require('del');
// AWS Dependencies
var AWS = require('aws-sdk');
var awspublish = require('gulp-awspublish');

gulp.task('build', ['images','minify-html','combine','styles','scripts']);

gulp.task('publish', ['build'], function() {

var publisher = awspublish.create({
  region: 'us-east-1',
  params: {
    Bucket: 'groganburners.ie'
  },
  credentials: new AWS.SharedIniFileCredentials({profile: 'gbswebuser'})
});

return gulp.src('./dist/**/*')
  .pipe(publisher.publish())
  .pipe(publisher.sync())
  .pipe(awspublish.reporter());

});

gulp.task('deploy', ['images','minify-html','combine','styles','scripts'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({force:true}));
});

gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src('./src/html/*')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/'));
});

/*
  Styles Task
*/

gulp.task('combine', function() {
    gulp.src('./src/css/*.css')
        .pipe(combineCSS({
            lengthLimit: 256,//2KB
            prefix: 'm-',
            selectorLimit: 4080
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('styles',function() {

  gulp.src('node_modules/bootstrap/dist/fonts/**.*')
    .pipe(gulp.dest('dist/fonts'))

  gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./src/scripts/lib'))

  // Compiles CSS
  /* gulp.src('css/style.styl')
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(reload({stream:true})) */
});

/*
  Images
*/
gulp.task('images',function(){

  gulp.src('src/img/*.ico')
        .pipe(imagemin({
            progressive: true,
            //optimizationLevel: 5,
            svgoPlugins: [{removeViewBox: false}],
            //use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/'));

  gulp.src('src/img/**/*')
        .pipe(imagemin({
            progressive: true,
            //optimizationLevel: 5,
            svgoPlugins: [{removeViewBox: false}],
            //use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['dist']);
});

/*
  Browser Sync
*/
gulp.task('browser-sync', function() {
    browserSync({
        // we need to disable clicks and forms for when we test multiple rooms
        server : './dist/',
        middleware : [ historyApiFallback() ],
        ghostMode: false
    });
});

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

function buildScript(file, watch) {

  var props = {
    entries: ['./src/scripts/' + file],
    debug : true,
    transform:  [babelify.configure({stage : 0 })]
  };

  // watchify() if watch requested, otherwise run browserify() once
  var bundler = watch ? watchify(browserify(props)) : browserify(props);

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulp.dest('./dist/'))
      // If you also want to uglify it
      .pipe(buffer())
      .pipe(uglify())
      .pipe(rename('app.min.js'))
      .pipe(gulp.dest('./dist'))
      .pipe(reload({stream:true}))
  }

  // listen for an update and run rebundle
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  // run it once the first time buildScript is called
  return rebundle();
}

gulp.task('scripts', function() {
  return buildScript('main.js', false); // this will once run once because we set watch to false
});

// run 'scripts' task first, then watch for future changes
gulp.task('default', ['images','minify-html','combine','styles','scripts','browser-sync'], function() {
  gulp.watch('src/html/*.html', ['minify-html']);
  gulp.watch('src/css/*.css', ['combine']);
  gulp.watch('src/css/**/*', ['styles']); // gulp watch for stylus changes
  return buildScript('main.js', true); // browserify watch for JS changes
});
