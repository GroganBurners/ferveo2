/*
  Carousel
  <Carousel />
*/

import React from 'react';
import autobind from 'autobind-decorator';

@autobind
class Navbar extends React.Component {

  renderList(results){
    return (
      <ul>
        {results.map(function(result) {
          return <li key={result.text}>{result.text} { result.hasOwnProperty('price') ? "€" + result.price : '' }</li>;
        })}
      </ul>
    );
  }
    
  render() {
    var details = this.props.details;
    var prices = this.props.prices;
    return (
      <div>
      <hr className="featurette-divider" />
      <a id={details.id}></a> 
      <div className="row featurette">
            <div className="col-md-5">
          <img className="featurette-image img-responsive" src={details.image} alt={details.image_alt} />
        </div>
        <div className="col-md-7">
        
          <h2 className="featurette-heading">{details.title}. <span className="text-muted">{details.subtitle}</span></h2>
          <p className="lead">{details.byline}</p>
            {this.renderList(prices)}
          <br />
         <p><a className="btn btn-lg btn-primary" href="#contact" role="button">Book {details.title}</a></p>
        </div>
        </div>

        </div>
    )
  }
};


export default Navbar;
