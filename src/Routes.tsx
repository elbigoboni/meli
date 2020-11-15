import React from "react";
import { Route } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";

const Routes: React.FC = () => (
  <>
    <Route path="/" exact={true}>
      <Home />
    </Route>
    <Route path="/resultados/:query" exact={true}>
      <Details />
    </Route>
    <Route path="/produto/:slug" exact={true}>
      <Detail />
    </Route>
  </>
);

export default Routes;
