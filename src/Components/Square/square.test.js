import React from 'react';
import Square from './square'
import {shallow} from 'enzyme'

it ('Renders successfully without crashing', () => {
    shallow(<Square />);
})