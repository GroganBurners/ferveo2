/*
  BookNow
  <BookNow />
*/

import React from 'react';
import autobind from 'autobind-decorator';

@autobind
class BookNow extends React.Component {

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
      <div>
      <hr className="featurette-divider" />
        <a id="contact"></a>
      <div className="row featurette">
          <div className="col-md-4">
          <img className="featurette-image img-responsive" src="/dist/img/featurettes/phone.jpg" alt="Grogan Burners Logo" />
     </div>
        <div className="col-md-8">
          <h2 className="featurette-heading">Book now. <span className="text-muted">A great experience awaits.</span></h2>
          <p className="lead"> <strong>Call us:</strong> 087 634 1300 or <strong>email:</strong> <a href="mailto:info@groganburners.ie">info@groganburners.ie</a></p>
        </div>
      </div>
      <hr className="featurette-divider" />
      </div>
    )
  }
};


export default BookNow;
