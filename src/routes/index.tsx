import React from "react";
import { Switch, Route } from "react-router-dom";
import Personagens from "../pages/Personagens";
import Login from "../pages/Login";
import Filmes from "../pages/Filmes";
import Hqs from "../pages/Hqs";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/filmes" component={Filmes} />
    <Route path="/Personagens" component={Personagens} />
    <Route path="/Hqs" component={Hqs} />
  </Switch>
);
export default Routes;
