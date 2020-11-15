import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Routes />
      </Switch>
    </Router>
  );
}

export default App;
