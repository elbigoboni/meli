import React from "react";
import { Route } from "react-router-dom";
import { PageDetail } from "../../pages/Detail";
import { PageDetails } from "../../pages/Details";
import { PageHome } from "../../pages/Home";
import { Header } from "../Header";

const Routes: React.FC = () => (
  <>
    <Route path="/" exact={true}>
      <Header />
      <PageHome />
    </Route>
    <Route path="/items/:s" exact={true}>
      <Header />
      <PageDetails />
    </Route>
    <Route path="/item/:id" exact={true}>
      <Header />
      <PageDetail />
    </Route>
  </>
);

export { Routes };
