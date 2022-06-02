//------------------START IMPORTS-----------------
import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
//Import Local files
import { useUser } from "../../hooks";
//------------------END IMPORTS------------------

const LoginPage = () => {
  const { login } = useUser();
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register")
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ email, password }) => {
      login({ email, password });
      navigate("/");
    },
  });

  return (
    <div className="login-container">
      <div className="login-container__titleContainer">
        <h1 className="login-container__titleContainer__title">Login</h1>
      </div>
      
      <form className="login-container__form" onSubmit={formik.handleSubmit}>
        <div className="login-container__form__element">
          <label className="login-container__form__element__label" htmlFor="email">Email</label>
          <input className="login-container__form__element__input"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Write your email"
          />
        </div>

        <div className="login-container__form__element">
          <label className="login-container__form__element__label" htmlFor="password">Password</label>
          <input className="login-container__form__element__input"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Choose password"
            autoComplete="off"
          />
        </div>

        <button className="login-container__form__button" type="submit">Login</button>
        <p onClick={goToRegister} className="login-container__form__register">Don't have an account? Register now!</p>
      </form>
    </div>
  );
};

export default LoginPage;
