import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import Eval from "./components/Eval";
import TimeLog from "./components/TimeLog";


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
            <TimeLog />
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
