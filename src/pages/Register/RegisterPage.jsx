//------------------START IMPORTS-----------------
import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
//Import Local files
import { useUser } from "../../hooks";
//------------------END IMPORTS------------------

const RegisterPage = () => {
  //Destructuring os useUser hook to obtain user and register method
  const { register } = useUser();
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    } else if (values.name < 3) {
      errors.email = "Must be 3 characters or more";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (values.email.length < 4) {
      errors.email = "Must be 5 characters or more";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 3) {
      errors.password = "Must be 3 characters or more";
    } else if (values.password === "123") {
      errors.password = "Must not be 123 !!!";
    }

    if (!values.repassword) {
      errors.repassword = "Required";
    } else if (values.repassword !== values.password) {
      errors.repassword = "Password doesn't match";
    }

    return errors;
  };
  //Create Formik element
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
    },
    validate,
    onSubmit: (values) => {
      register(values);
      navigate("/login");
    },
  });

  return (
    <div className="register-container">
      <div className="register-container__titleContainer">
        <h1 className="register-container__titleContainer__title">Register</h1>
      </div>
      <form className="register-container__form" onSubmit={formik.handleSubmit}>
        <div className="register-container__form__element">
          <label
            className="register-container__form__element__label"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="register-container__form__element__input"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Write your name"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="register-container__form__element">
          <label
            className="register-container__form__element__label"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="register-container__form__element__input"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Write your email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="register-container__form__element">
          <label
            className="register-container__form__element__label"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="register-container__form__element__input"
            v
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Choose password"
            autoComplete="off"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="register-container__form__element">
          <label
            className="register-container__form__element__label"
            htmlFor="repassword"
          >
            Repeat Password
          </label>
          <input
            className="register-container__form__element__input"
            id="repassword"
            name="repassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repassword}
            placeholder="repeat password"
            autoComplete="off"
          />
          {formik.touched.repassword && formik.errors.repassword ? (
            <div className="error">{formik.errors.repassword}</div>
          ) : null}
        </div>

        <button className="register-container__form__button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
