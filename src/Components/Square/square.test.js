import React from 'react';
import Square from './square'
import {shallow} from 'enzyme'

describe("Square", () => {
it ('Renders successfully without crashing', () => {
    shallow(<Square />);
})

test ('Clickable squares on board check', () => {
    const wrapper = shallow(<Square />);
    expect(wrapper.find("button").simulate("click"));
})
});