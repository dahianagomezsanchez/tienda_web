import React, {Fragment} from "react";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./register/RegisterPage";
import SalesPages from "./sales/SalesPages";
import UsersPages from "./users/UsersPages";
import HomePages from "./home/HomePages";
import{BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavbarComponent from "./shared/components/navbar/NavbarComponent";

function App() {
  return (
    <Router>
      <NavbarComponent title="Misión TIC" title1="La Tienda del Grupo 23" />

      <Switch>
        <Route path="/home" exact>
          <HomePages />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/sales" exact>
          <SalesPages />
        </Route>
        <Route path="/users" exact>
          <UsersPages />
        </Route>
      </Switch>

      /* Ingresar el footer */
    </Router>
  );
}

export default App;
