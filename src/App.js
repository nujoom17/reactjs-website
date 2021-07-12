import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/sign-in';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home/>
      </Route>
     <Route exact path="/sign-in">
      <SignInPage/>
     </Route>
    </Router>
  );
}

export default App;
