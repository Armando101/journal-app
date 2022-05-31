import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Router } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";

const history = createBrowserHistory();

export const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth" component={AuthRouter} />
        <Route exact path="/" component={JournalScreen} />
        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};
