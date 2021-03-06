import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { useAuth } from "./hooks/useAuth";
import Chat from "./pages/Chat";
import Login from "./pages/Login";

export default function Routes() {
  const { isAuthenticated } = useAuth();

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/chat">
        <Chat />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}
