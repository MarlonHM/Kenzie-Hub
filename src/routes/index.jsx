import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Login from "../pages/Login";
import Registro from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import { useState, useEffect } from "react";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenziehub:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/register">
        <Registro authenticated={authenticated} />
      </Route>
      <Route path="/dashboard">
        <Dashboard
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </Switch>
  );
};

export default Routes;
