import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import BookingForm from './BookingForm';
import Confirmation from './Confirmation';
import './App.css';

const App = ()=> {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/book" component={BookingForm} />
          <Route path="/confirmation" component={onfirmation} />
        </Switch>
      </div>
    </Router>

  );
};

export default App;
