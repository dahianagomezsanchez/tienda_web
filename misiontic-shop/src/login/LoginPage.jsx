import React, { Fragment, useState } from "react";
import loginStyles from "./loginStyles.css";

import FootComponent from "../shared/components/footer/FootComponent";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(0);

  return (
    <Fragment>
      <div className="container">
        <h1>Inicio de Sesión</h1>

        <div className="form-floating mb">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(email) => setEmail(email.target.value)}
          />
          <label for="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(password) => setPassword(password.target.value)}
          />

          <label for="floatingPassword">Password</label>
        </div>

        <div>
          <button
            type="button"
            className="btn btn-primary"
           /*  onClick={() => setSubmit(submit + 1)} */
          >
            Ingresar
          </button>
          <h1>{password}</h1>
        </div>

        <div>
          <a href="Register.jsx">
            Sí no se encuentra registrado Click aquí<div className=""></div>
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default LoginPage;
