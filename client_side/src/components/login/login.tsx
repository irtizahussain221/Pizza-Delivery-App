import axios from "axios";
import { useHistory } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import "./login.css";
import { loginStatusProps } from "../../interfaces/interfaces";

function Login(props: loginStatusProps) {
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post("http://localhost:5000/login", values)
        .then((res) => {
          localStorage.setItem("jwt-token", `${res.headers["auth-token"]}`);
          axios
            .get("http://localhost:5000/getUserDetails", {
              headers: {
                "auth-token": `${res.headers["auth-token"]}`,
              },
            })
            .then((res) => {
              localStorage.setItem("currentUser", JSON.stringify(res.data));
              props.setLoggedIn(true);
              history.push("/");
            })
            .catch(console.log);
        })
        .catch((e) => {
          alert("Something bad happened!");
          console.log(e);
        });
    },
    validationSchema: yup.object({
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
    }),
  });

  return (
    <div className="login">
      <div className="row justify-content-center mt-5">
        <div
          className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white-rounded"
          style={{ backgroundColor: "white" }}
        >
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>
          <div>
            <form onSubmit={formik.handleSubmit}>
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
                onChange={(e) => {
                  formik.handleChange(e);
                }}
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
              <input className="btn mt-3 mb-3" type="submit" value="LOGIN" />
              <br />
              <a href="/signin" style={{ color: "black" }}>
                Click Here to Register
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
