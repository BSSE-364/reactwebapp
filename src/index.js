import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

import App from './OnlineStoreProject/App';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history} >
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
