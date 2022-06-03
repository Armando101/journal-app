import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "rivera.armando997@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login("1234", "Armando"));
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          className="auth__input"
          autoComplete="off"
          type="text"
          onChange={handleInputChange}
          placeholder="Email"
          name="email"
          value={email}
        />
        <input
          className="auth__input"
          autoComplete="off"
          type="password"
          onChange={handleInputChange}
          placeholder="Password"
          name="password"
          value={password}
        />

        <button className="btn btn-primary btn-block" type="submit">
          Login
        </button>

        <div className="auth__social-networks">
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className="link" to="/auth/register">
          Create new account
        </Link>
      </form>
    </>
  );
};
