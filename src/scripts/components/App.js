/*
  App
*/

import React from 'react';
import Feature from './Feature';
import Teaser from './Teaser';
import Carousel from './Carousel';
import Navbar from './Navbar';
import BookNow from './BookNow';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Catalyst from 'react-catalyst';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';


@autobind
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      features : require('../data/features'),
      marketing : require('../data/marketing'),
      prices : require('../data/prices'),
      carousel : require('../data/carousel')
    }
  }

  renderFeature(key){
    return (
        <Feature key={key} index={key} details={this.state.features[key]}  prices={this.state.prices[key]} />
      )
  }

    renderMarketing(key){
    return (
        <Teaser key={key} index={key} marketing={this.state.marketing[key]} />
      )
  }

  render() {
    return (
      <div>
        <Navbar />
        <Carousel carousel={this.state.carousel} />
        <div className="container marketing">
          <div className="row">
            {Object.keys(this.state.marketing).map(this.renderMarketing)}
          </div>
          {Object.keys(this.state.features).map(this.renderFeature)}
          <BookNow />
          <AboutUs />
          <Footer />
        </div>
      </div>
    )
  }

};

reactMixin.onClass(App, Catalyst.LinkedStateMixin);

export default App;
