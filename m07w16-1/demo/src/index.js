import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App'; // taking advantage of the default export
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <App myProp="myValue">
      <Header title="Header inside the App component" />
      <p>This is a paragraph</p>
    </App>
  </div>
);
