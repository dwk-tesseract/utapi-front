import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders welcome H1 message', () => {
  const wrapper = shallow(<Header />);
  const welcome = <h1 className="App-title">Angry Bear</h1>;
  expect(wrapper).toContainReact(welcome);
});
