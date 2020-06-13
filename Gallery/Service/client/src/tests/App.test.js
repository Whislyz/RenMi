import React from 'react';
import App from '../components/App.jsx';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

//simple testing make it works in this file
describe('App',() => {
  it('it should be true', () => {
    const foo = true;
    expect(foo).toBe(true);
  });
  // it('should be false', () => {
  //   const foo = true;
  //   expect(foo).toBe(false);
  // })
});

// testing existence
describe('existence suite', () => {
  it('should exists', () => {
    const AppShallow = shallow(<App />);
    const AppMount = mount(<App />);
    // const AppRender = render(<App />)
    expect(AppShallow.exists()).toBe(true)
    expect(AppMount.exists()).toBe(true)
    expect(AppMount.instance().componentDidMount())
    expect(AppMount.instance().getImage())
    expect(AppMount.instance().handleError())
  });
})

// testing components div
describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<div></div>).exists()).toBe(true);
  });
});



