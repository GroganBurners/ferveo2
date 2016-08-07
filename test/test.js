import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../src/scripts/components/App';
import Navbar from '../src/scripts/components/Navbar';
import Carousel from '../src/scripts/components/Carousel';

describe('<App />', () => {

  it('contains an <Navbar/> component', function () {
    const wrapper = mount(<App/>);
    expect(wrapper.find(Navbar)).to.have.length(1);
  });

  it('contains an <Carousel/> component', function () {
    const wrapper = mount(<App/>);
    expect(wrapper.find(Carousel)).to.have.length(1);
  });


});