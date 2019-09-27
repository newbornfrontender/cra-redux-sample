import { combineReducers } from 'redux';

import counter from './counter';
import logged from './logged';

const reducers = combineReducers({ counter, logged });

export default reducers;
