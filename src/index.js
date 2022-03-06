import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.sass';
import App from './form/App/App';
import './fakeApi/server';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);