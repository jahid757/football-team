import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NoFound/NoFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';
function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/league/:id">
            <LeagueDetail/>
          </Route>


          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
