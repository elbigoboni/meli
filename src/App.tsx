import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Detail } from "./pages/Detail";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/detalhes">
            <Details />
          </Route>
          <Route path="/detalhe">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
