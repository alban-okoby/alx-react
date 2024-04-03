// Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders without crashing', () => {
    shallow(<Notifications />);
  });

  test('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('ul').children()).toHaveLength(3);
  });

  test('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains('Here is the list of notifications')).toBe(true);
  });
});
