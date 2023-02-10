import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { forwardRef, useState } from "react";
import { UserType } from "../../types/userType";
import "./loginForm.css";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const LogInForm = () => {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const initiialValues: UserType = {
    id: 1,
    name: "",
    email: "",
    password: "",
    image: "",
  };

  const SinginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Please Enter your email"),
    password: Yup.string()
      .min(7, "It should be more than 6 character")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number"
      )
      .required("Please Enter your password"),
  });
  const submitHandler = (values: UserType) => {
    console.log(values);
    fetch("http://localhost:8000/users", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((values) => {
        console.log("Success:", values);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    handleClick();
    setIsLogin(true);
  };
  return (
    <div className="form-container">
      {!isLogin ? (
        <Formik
          initialValues={initiialValues}
          onSubmit={submitHandler}
          validationSchema={SinginSchema}
        >
          {({ errors, touched, handleChange }) => {
            return (
              <Form className="form">
                <div>
                  <TextField
                    required
                    name="email"
                    label="Email"
                    onChange={handleChange}
                  />
                  {errors.email && touched.email ? <p>{errors.email}</p> : null}
                </div>
                <div>
                  <TextField
                    required
                    name="password"
                    label="Password"
                    onChange={handleChange}
                    type="password"
                  />
                  {errors.password && touched.password ? (
                    <p>{errors.password}</p>
                  ) : null}
                </div>
                <Button variant="contained" type="submit">
                  Log In
                </Button>
              </Form>
            );
          }}
        </Formik>
      ) : (
        <div className="welcome">
          Welcome! <span>{name}</span>
          <Button variant="outlined" onClick={() => setIsLogin(false)}>
            Back
          </Button>
        </div>
      )}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          You have logged in successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};
export default LogInForm;
