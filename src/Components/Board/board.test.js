import React from 'react';
import Board from './board'
import {shallow} from 'enzyme'

it ('Renders successfully without crashing', () => {
    shallow(<Board />);
})