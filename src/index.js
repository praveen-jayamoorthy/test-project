import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './Reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
