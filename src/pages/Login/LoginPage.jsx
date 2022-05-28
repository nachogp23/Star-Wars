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



  const formik = useFormik({
      initialValues: {
          email: "",
          password: "",
      },
      onSubmit: ({email, password}) => {
        login({email, password});
        navigate("/");  
      },
  });

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
    
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Write your email"
        />
    
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Choose password"
          autoComplete="off"
        />
       
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
