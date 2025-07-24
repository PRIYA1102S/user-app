import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
    
  );
}

export default App;