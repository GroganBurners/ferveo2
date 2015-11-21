/*
  Feature
  <Feature />
*/

import React from 'react';
import autobind from 'autobind-decorator';

@autobind
class Teaser extends React.Component {


    
  render() {
    var marketing = this.props.marketing;
    return (
      <div className="col-lg-4">
          <img className="img-circle" src={marketing.image} alt={marketing.image_alt} style={{width: '140px', height: '140px'}}  />
          <h2>{marketing.title}</h2>
          <p>{marketing.text}</p>
          <p><a className="btn btn-default" href={'#'+marketing.link} role="button">View details &raquo;</a></p>
        </div>
    )
  }
};


export default Teaser;
