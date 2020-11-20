import React from "react";
import { Route } from "react-router-dom";
import { Detail } from "../../pages/Detail";
import { Details } from "../../pages/Details";
import { Home } from "../../pages/Home";
import { Header } from "../Header";

const Routes: React.FC = () => (
  <>
    <Route path="/" exact={true}>
      <Header />
      <Home />
    </Route>
    <Route path="/items/:s" exact={true}>
      <Header />
      <Details />
    </Route>
    <Route path="/item/:id" exact={true}>
      <Header />
      <Detail />
    </Route>
  </>
);

export { Routes };
