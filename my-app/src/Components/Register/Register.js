import React, { Component } from "react";
import "./Register.css";

export default class Register extends Component {
  render() {
    return (
      <form>
        <h3>Register</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid gap-2 pt-4 ">
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Register
          </button>
        </div>

        <p className="forgot-password text-right">
          Already registered <a href="/Login">log in?</a>
        </p>
      </form>
    );
  }
}
