import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function reducer(state, action) {
  switch (action.type) {
    case 'SET_COLOR':
      return { ...state, color: action.payload };
    case 'SET_FONT_FAMILY':
      return { ...state, fontFamily: action.payload };
    case 'SET_FONT_STYLE':
      return { ...state, fontStyle: action.payload };
    case 'SET_FONT_WEIGHT':
      return { ...state, fontWeight: action.payload };
    case 'SET_TEXT':
      return { ...state, text: action.payload };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  {
    color: 'black',
    fontStyle: 'normal',
    fontFamily: 'arial',
    fontWeight: 'normal',
    text: 'hello world'
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
