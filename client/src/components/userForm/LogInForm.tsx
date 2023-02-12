import { Alert, IconButton, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import "./loginForm.css";
import UserInformation from "../userInformation/UserInformation";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchUserData } from "../../redux/thunk/user";
import { useSelector } from "react-redux";
import { userActions } from "./../../redux/slice/user";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export type InitialType = {
  email: string;
  password: string;
};
const LogInForm = () => {
  const [open, setOpen] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [userInput, setUerInput] = useState<InitialType>();
  const [submitClicked, setSubmitClicked] = useState(false);
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  const dispatchNorm = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  const showPassHandler = () => {
    setShowPass(!showPass);
  };
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

  const initialValues: InitialType = {
    email: "",
    password: "",
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
  const submitHandler = (values: InitialType) => {
    setSubmitClicked(true);
    setUerInput(values);
    dispatch(fetchUserData(values));
    console.log(user, "user in submit");
    if (user.email === values.email && user.password === values.password) {
      dispatchNorm(userActions.loginHandler(true));
      setSubmitClicked(false);
    } else {
      handleClick();
    }
  };
  console.log(submitClicked, "submit clicked");
  return (
    <div className="form-container">
      {!isLogin ? (
        <Formik
          initialValues={initialValues}
          onSubmit={submitHandler}
          validationSchema={SinginSchema}
        >
          {({ values, errors, touched, handleChange }) => {
            return (
              <Form className="form">
                <div>
                  <TextField
                    required
                    name="email"
                    label="Email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && touched.email ? <p>{errors.email}</p> : null}
                </div>
                <div>
                  <TextField
                    required
                    name="password"
                    label="Password"
                    onChange={handleChange}
                    value={values.password}
                    type={showPass ? "text" : "password"}
                  />
                  <span className="visibility">
                    {showPass ? (
                      <IconButton onClick={showPassHandler}>
                        <VisibilityOff />
                      </IconButton>
                    ) : (
                      <IconButton onClick={showPassHandler}>
                        <Visibility />
                      </IconButton>
                    )}
                  </span>
                  {errors.password && touched.password ? (
                    <p>{errors.password}</p>
                  ) : null}
                </div>
                <Button variant="contained" type="submit">
                  log in
                </Button>
              </Form>
            );
          }}
        </Formik>
      ) : (
        <UserInformation />
      )}
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Invalid email or password!
        </Alert>
      </Snackbar>
    </div>
  );
};
export default LogInForm;
