import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import TimeLog from "./components/TimeLog";
import Eval from "./components/Eval";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/TimeLog">
            <Timelog />
          </Route>
          <Route exact path="/Eval">
            <Eval />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
