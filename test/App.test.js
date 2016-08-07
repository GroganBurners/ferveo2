import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../src/scripts/components/App';
import Navbar from '../src/scripts/components/Navbar';
import Carousel from '../src/scripts/components/Carousel';
import BookNow from '../src/scripts/components/BookNow';
import AboutUs from '../src/scripts/components/AboutUs';
import Footer from '../src/scripts/components/Footer';

describe('<App />', () => {

  it('contains an <Navbar/> component', function () {
    const wrapper = mount(<App/>);
    expect(wrapper.find(Navbar)).to.have.length(1);
  });

  it('contains an <Carousel/> component', function () {
    const wrapper = mount(<App/>);
    expect(wrapper.find(Carousel)).to.have.length(1);
  });

  it('contains an <BookNow/> component', function () {
    const wrapper = mount(<App/>);
    expect(wrapper.find(BookNow)).to.have.length(1);
  });

  it('contains an <AboutUs/> component', function () {
    const wrapper = mount(<App/>);
    expect(wrapper.find(AboutUs)).to.have.length(1);
  });

  it('contains an <Footer/> component', function () {
    const wrapper = mount(<App/>);
    expect(wrapper.find(Footer)).to.have.length(1);
  });

  it('should have props for carousel', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.props().carousel).to.be.defined;
  });

  it('should have props for features', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.props().features).to.be.defined;
  });

  it('should have props for marketing', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.props().marketing).to.be.defined;
  });


});