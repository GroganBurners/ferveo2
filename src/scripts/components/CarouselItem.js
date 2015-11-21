/*
  CarouselItem
  <CarouselItem />
*/

import React from 'react';
import autobind from 'autobind-decorator';

@autobind
class CarouselItem extends React.Component {

  render() {
    var item = this.props.caroitem;
    return (
      <div className={ item.hasOwnProperty('active') ? "item active" : 'item' }>
          <img src={item.image} />
          <div className="container">
            <div className="carousel-caption">
              <h1>{item.title}</h1>
              <p>{item.text}</p><a className="btn btn-lg btn-primary" href="#gas" role="button">See Gas offers</a>   <a className="btn btn-lg btn-primary" href="#summer" role="button">See Oil offers</a>
            </div>
          </div>
        </div>
    )
  }
};


export default CarouselItem;
