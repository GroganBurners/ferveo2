/*
  Carousel
  <Carousel />
*/

import React from 'react';
import autobind from 'autobind-decorator';
import CarouselItem from './CarouselItem';

@autobind
class Carousel extends React.Component {

    renderCarouselItem(key){
    return (
        <CarouselItem key={key} index={key} caroitem={this.props.carousel[key]} />
      )
  }

  render() {
    var caroItems = [];
    for (var i=0; i<Object.keys(this.props.carousel).length; i++){
      switch (i) {
          case 0: caroItems.push(<li data-target="#myCarousel" key={'myCarouselInd' + i} data-slide-to={i} className="active"></li>); break;
          default: caroItems.push(<li data-target="#myCarousel" key={'myCarouselInd' + i} data-slide-to={i} ></li>);

        }
    }
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="10000">
      <ol className="carousel-indicators">
        {caroItems}
      </ol>
      <div className="carousel-inner" role="listbox">
       {Object.keys(this.props.carousel).map(this.renderCarouselItem)}
       </div>
      <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    )
  }
};


export default Carousel;
