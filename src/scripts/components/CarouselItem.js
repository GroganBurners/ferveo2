/*
  CarouselItem
  <CarouselItem />
*/

import React from 'react';
import autobind from 'autobind-decorator';

@autobind
class CarouselItem extends React.Component {

  renderButtons(buttons){
    return (
          <div>
            { buttons.map(function (n, i) {
                return <a className="btn btn-lg btn-primary" key={'caroButton-' + n.text} href={n.location} role="button">{n.text}</a>;
              })
            }
          </div>
    )
  }

  render() {
    var item = this.props.caroitem;
    return (
      <div className={ item.hasOwnProperty('active') ? "item active" : 'item' }>
        <img src={item.image} />
        <div className="container">
          <div className="carousel-caption">
            <h1>{item.title}</h1>
            <p>{item.text}</p>
            {this.renderButtons(item.buttons)}
        </div>
        </div>
      </div>
    )
  }
};


export default CarouselItem;
