import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AuthReducer from './store/reducers/auth_reducer';

let store = createStore(AuthReducer);

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root')
);


