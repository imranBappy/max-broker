import React from 'react';
import {BrowserRouter as Router,
  Switch, Route,
  HashRouter
} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css';
const App = () => {
  return (
    <>
    <HashRouter>
      <Switch>
        <Route path='/' component={Dashboard}/> 
      </Switch>
    </HashRouter>
    </>
  );
};
// Kyc
export default App;