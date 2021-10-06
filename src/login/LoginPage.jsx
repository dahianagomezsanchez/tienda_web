import React, { Fragment, useState } from "react";
import "./loginStyles.css";

import FootComponent from "../shared/components/footer/FootComponent";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(0);

  return (
    <Fragment>
      <br />
      <br />
      <br />
      <div className="container">
        <center>
          <h1>Inicio de Sesión</h1>
        </center>
        <br />
        <div><button
          type="button"
          className="button go next-button"
          data-step="acceder_gmail"
        >
          Ingresa con Google
              </button></div>
        <br />

        <div className="form-floating mb-2">
          <center>
            <label for="floatingInput">Email address</label>
          </center>
          <center>
            {" "}
            <br />
            <input
              type="email"
              className="form-control-email"
              id="floatingInput"
              placeholder="xxxxxxxx@example.com"
              onChange={(email) => setEmail(email.target.value)}
            />
          </center>
        </div>
        <br />

        <div className="form-floating">
          <center>
            <label for="floatingPassword">Password</label>
          </center>
          <center>
            {" "}
            <br />
            <input
              type="password"
              className="form-control-password"
              id="floatingPassword"
              placeholder="Password"
              onChange={(password) => setPassword(password.target.value)}
            />
            <br />
            <br />
            <br />
          </center>
        </div>

        <div>
          <center>
            <button
              type="button"
              className="btn btn-primary"
              /*  onClick={() => setSubmit(submit + 1)} */
            >
              Ingresar
            </button>
            <h1>{password}</h1>
          </center>
        </div>
        <br />
        <div>
          <a href="Register.jsx">
            <center>
              Sí no se encuentra registrado Click aquí<div className=""></div>
            </center>
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default LoginPage;
