import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AuthRouter = () => {
  return (
    <Switch>
      <Route path="/auth/login" component={LoginScreen}></Route>
      <Route path="/auth/register" component={RegisterScreen}></Route>
      <Redirect to="/auth/login" />
    </Switch>
  );
};
