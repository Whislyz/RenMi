import React from 'react';
import ViewPhotos from '../components/ViewPhotos';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

// testing existence
describe('existence suite', () => {
  it('should exists', () => {
    const ViewPhotosMount = mount(<ViewPhotos />);
    // expect(ViewPhotosMount.instance().minusAttb())
    expect(ViewPhotosMount.instance().addAttb())
  });
})
