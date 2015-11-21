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
    return (
    <div className="navbar-wrapper">
      <div className="container">

        <div className="navbar navbar-inverse navbar-static-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Grogan Burners<img itemProp="logo" src="dist/img/menu/flames.png"/></a>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#gas">Gas Services</a></li>
                <li><a href="#oil">Oil Services</a></li>
                <li><a href="#repair">Boiler Repair</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#about">About Us</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
    )
  }
};


export default Navbar;
