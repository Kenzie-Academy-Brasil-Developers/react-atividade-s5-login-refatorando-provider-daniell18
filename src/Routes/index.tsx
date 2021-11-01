import { Route, Switch } from "react-router";
import { DashBoard } from "../Components/DashBoard";
import { Login } from "../Components/Login";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <DashBoard />
        </Route>
      </Switch>
    </div>
  );
};
