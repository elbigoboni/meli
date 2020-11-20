import React from "react";
import { Route } from "react-router-dom";
import { Detail } from "../../pages/Detail";
import { Details } from "../../pages/Details";
import { Home } from "../../pages/Home";
import { Header } from "../Header";

const Routes: React.FC = () => (
  <>
    <Header />
    <Route path="/" exact={true}>
      <Home />
    </Route>
    <Route path="/items/:s" exact={true}>
      <Details />
    </Route>
    <Route path="/item/:id" exact={true}>
      <Detail />
    </Route>
  </>
);

export { Routes };
