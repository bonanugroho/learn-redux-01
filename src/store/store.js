import { createStore, applyMiddleware } from 'redux';

import loggerMidleware from './logger';
import reducer from './reducer';

const store = createStore(reducer);

export default store;