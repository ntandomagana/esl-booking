import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import BookingForm from "./components/BookingForm";
import Confirmation from "./components/Confirmation";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/book" component={BookingForm} />
          <Route path="/confirmation" component={Confirmation} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
