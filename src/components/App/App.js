import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import HomePage from '../Home';
import * as ROUTES from '../../constants/routes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path={ROUTES.HOME} component={() => <HomePage />} />
      </div>
    </Router>
  );
}

export default App;
