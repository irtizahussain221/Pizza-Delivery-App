import { useState } from "react";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import "./signIn.css";
import axios from "axios";

function Signin() {
  let [passwordsMatch, setMatch] = useState(true);
  let history = useHistory();

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      if (values.confirmPassword !== values.password) return setMatch(false);
      if (values.confirmPassword === values.password) setMatch(true);

      axios
        .post("http://localhost:5000/register", {
          name: values.name,
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          console.log(res.data);
          history.push("/login");
        })
        .catch(console.log);
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required("This field is required!")
        .min(6, "Too short"),
      email: yup
        .string()
        .min(6, "Type a valid email address!")
        .email("Type a valid email address!")
        .required("This field is required."),
      password: yup
        .string()
        .min(6, "Password is too short.")
        .max(12, "Password is too long.")
        .required("This field is required."),
      confirmPassword: yup
        .string()
        .min(6, "Password is too short.")
        .max(12, "Password is too long.")
        .required("This field is required."),
    }),
  });

  return (
    <div className="register">
      <div className="row justify-content-center mt-5">
        <div
          className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white-rounded"
          style={{ backgroundColor: "white" }}
        >
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Register
          </h2>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <input
                type="text"
                placeholder="name"
                required
                className={
                  formik.errors.name
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name ? (
                <div className="invalid-feedback">{formik.errors.name}</div>
              ) : null}
              <input
                type="email"
                placeholder="email"
                required
                className={
                  formik.errors.email
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email ? (
                <div className="invalid-feedback">{formik.errors.email}</div>
              ) : null}
              <input
                type="password"
                placeholder="password"
                required
                className={
                  formik.errors.password
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password ? (
                <div className="invalid-feedback">{formik.errors.password}</div>
              ) : null}
              <input
                type="password"
                placeholder="confirm password"
                required
                className={
                  formik.errors.confirmPassword
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
              {formik.errors.confirmPassword ? (
                <div className="invalid-feedback">
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
              <input className="btn mt-3 mb-3" type="submit" value="REGISTER" />
              <br />
              {passwordsMatch ? null : (
                <div className="alert alert-danger" role="alert">
                  Passwords donot match
                </div>
              )}
              <a href="/login" style={{ color: "black" }}>
                Click Here to Login
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
