/*
  AboutUs
  <AboutUs />
*/
import React from 'react';
import autobind from 'autobind-decorator';

@autobind
class AboutUs extends React.Component {

  render() {
    return (
      <div>
			<hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-4">
          <img className="featurette-image img-responsive" src="/dist/img/featurettes/logo.png" alt="Generic placeholder image" />
        </div>
        <div className="col-md-5">
        <a id="about"></a>
          <h2 className="featurette-heading">About us. <span className="text-muted">Over 40 years experience.</span></h2>
          <p>Grogan Burners is based in Ballyda, Danesfort, Co. Kilkenny. We serve Kilkenny City and the surrounding counties in the Leinster region. Started over 40 years ago by Milo Grogan, his son Michael now runs the business, after setting up the limited company in 2007. We take pride in our service and many of our customers have been with us for years - we like to keep people loyal!</p>

          <p className="lead"> We provide:</p>
          <ul>
            <li>Gas boiler service</li>
            <li>Gas burner service</li>
            <li>Gas boiler repair</li>
            <li>Gas burner repair</li>
            <li>Gas combi boiler service</li>
            <li>Gas fire service</li>
            <li>Oil boiler service</li>
            <li>Oil burner service</li>
            <li>Oil boiler repair</li>
            <li>Oil burner repair</li>
            <li>Oil combi boiler service</li>
            <li>Oil condensing boiler service</li>
          </ul>

          <p className="lead"> Service area includes: parts of Loais, Offaly, Kilkenny, Tipperary, Carlow, Waterford.</p>

          <p>We also take safety as the number one priority. All of our engineers are RGI (gas) and OFTEC (oil) certified and carry work out to the highest standard.</p>
        </div>
        <div className="col-md-3">
        <img src="/dist/img/cert/oftec.jpg" />
        <img src="/dist/img/cert/rgii.jpg" />
        </div>
      </div>

      <hr className="featurette-divider" />

      </div>
    )
  }
};


export default AboutUs;
