import React from 'react';
import MainGallery from '../components/MainGallery.jsx';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

//testing existence
describe('existence suite', () => {
  it('should exists', () => {
    const MainGalleryShallow = shallow(<MainGallery />);
    const MainGalleryMount = mount(<MainGallery />);
    const MainGalleryRender = render(<MainGallery />)
    expect(MainGalleryShallow.exists()).toBe(true)
    expect(MainGalleryMount.exists()).toBe(true)
  });
})



