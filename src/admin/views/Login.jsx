import React from "react";
import "./Login.css";
// import styled from "styled-components";
import { Link } from "react-router-dom";
// const LoginWrapepr = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background-color: #fafafa;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-image: linear-gradient(45deg, #0c0032, #0c0032),
//     url(images/bg/bg1.jpg);
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
// `;
const login = () => {
  return (
    <div
      className="container"
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
    >
      <div className="row justify-content-center" style={{ marginTop: "15%" }}>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="st_form_login shadow-lg">
            <div className="Form_Header mb-3">
              <h3 className="text-white">
                {" "}
                <strong> ADMIN </strong> PANNEL
              </h3>
            </div>
            <div className="form-group st_text_input">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email address"
                //   value={email}
                onChange={(e) => {
                  // this.setState({ email: e.target.value });
                }}
                required
              />
              {/* <label
              htmlFor="email"
            //   className={this.state.email !== "" ? "up" : null}
            >
              Email address
            </label> */}
              {/* {errorMessage.hasOwnProperty("email") && (
              <span className="invalid-feedback">
                {errorMessage.email}
              </span>
            )} */}
            </div>
            <div className="form-group st_text_input">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                //   value={password}
                onChange={(e) => {
                  // this.setState({ password: e.target.value });
                }}
                required
              />
              {/* <label
              htmlFor="password"
            //   className={this.state.password !== "" ? "up" : null}
            >
              Password
            </label> */}
              {/* {errorMessage.hasOwnProperty("password") && ( */}
              {/* <span className="invalid-feedback">
                {errorMessage.password}
              </span> */}
              {/* )} */}
            </div>
            <input
              className="btn btn-info btn-block st_btn_login"
              type="button"
              value="Login"
              // value={loading ? "loading..." : "Login"}
              // onClick={() => this.handleLogin()}
              // disabled={loading}
            />

            {/* <div className="forgot_pass mt-3">
            Forgot your password? <Link to="/forgot-password">Click Here</Link>
          </div>
          <div className="forgot_pass mt-0">
            Don't have an account? <Link to="/register">Register</Link>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
