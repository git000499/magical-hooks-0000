import React from "react";
import { Link } from "react-router-dom";
import "./authentication.css";
//import url('href=https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css');

const Authentication = () => {
  return (
    <div>
      {/*<link
        crossorigin
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      />*/}
      <h1>Authentication</h1>

      <main className="form-signin w-100 m-auto">
        <form>
          <img
            className="mb-4"
            // src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </div>
  );
};

export default Authentication;
