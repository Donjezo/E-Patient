import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <form className="gresa">
        <h3>Log in</h3>

        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email" />
          <label></label>
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
          <label></label>
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label
              className="forgot-password custom-control-label"
              htmlFor="customCheck1"
            >
              Forgot <a href="#">password</a>
            </label>
          </div>
        </div>
        <div className="d-grid gap-2 pt-4">
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>
        </div>
      </form>
    );
  }
}
