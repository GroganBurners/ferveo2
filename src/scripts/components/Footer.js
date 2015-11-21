/*
  Footer
  <Footer />
*/
import React from 'react';
import autobind from 'autobind-decorator';

@autobind
class Footer extends React.Component {

  render() {
    return (
      <footer>
      <div itemScope itemType="http://schema.org/Organization">
        <p className="pull-right"><a href="#">Back to top</a></p>
        <div>&copy; 2007-{new Date().getFullYear()} <span itemProp="name">Grogan Burner Services Ltd.</span>,
          <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
            <span itemProp="streetAddress">Ballyda</span>,
            <span itemProp="addressLocality"> Danesfort</span>,
            <span itemProp="addressRegion"> Co. Kilkenny, Ireland</span>
          </div>
        </div>
          <p>Phone us: <span itemProp="telephone">087 634 1300</span> </p>
          <a href="http://www.groganburners.ie/" itemProp="url">www.groganburners.ie</a>

          <p>Company Reg No: 451657 &middot; VAT No: IE 9675520W  {/* &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a> */}</p>
      </div>
      </footer>
    )
  }
};


export default Footer;
