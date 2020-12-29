import React, { useState, useEffect } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { checkLogin, loginSetError } from "../../store/auth/actions";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    const { checkLogin } = props;
    await checkLogin({ email, password });
    history.push("/admin/dashboard");
  };
  useEffect(() => {
    // Anything in here is fired on component mount.
    return () => {
      // Anything in here is fired on component unmount.
      props.loginSetError({ message: {} });
    };
  }, []);
  return (
    <div
      className="container"
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
    >
      <form action="" onSubmit={handleLogin}>
        <div
          className="row justify-content-center"
          style={{ marginTop: "15%" }}
        >
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
                  value={state.email}
                  onChange={(e) => {
                    setState({ ...state, email: e.target.value });
                  }}
                  required
                />
                {props.errorMessage.hasOwnProperty("email") && (
                  <span style={{ color: "#fff" }}>
                    {props.errorMessage.email}
                  </span>
                )}
              </div>
              <div className="form-group st_text_input">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={state.password}
                  onChange={(e) => {
                    setState({ ...state, password: e.target.value });
                  }}
                  required
                />
                {props.errorMessage.hasOwnProperty("password") && (
                  <span style={{ color: "#fff" }}>
                    {props.errorMessage.password}
                  </span>
                )}
              </div>
              <input
                className="btn btn-info btn-block st_btn_login"
                type="submit"
                value={props.loading ? "loading..." : "Login"}
                disabled={props.loading}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  errorMessage: state.auth.errorMessage,
});
export default connect(mapStateToProps, {
  checkLogin,
  loginSetError,
})(Login);
