import React from 'react';
import Game from './game'
import {shallow} from 'enzyme'


it ('Renders successfully without crashing', () => {
    shallow(<Game />);
})


