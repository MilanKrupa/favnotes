import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap"
      rel="stylesheet"
    />
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
