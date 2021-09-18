import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, ListPage, DetailsPage } from "./pages";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/movies" component={ListPage} />
    <Route exact path="/movies/latest" component={ListPage} />
    <Route exact path="/movies/popular" component={ListPage} />
    <Route exact path="/movies/:id" component={DetailsPage} />
  </Switch>
);

export default Routes;
