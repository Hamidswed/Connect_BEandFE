import { Alert, IconButton, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { UserType } from "../../types/userType";
import "./loginForm.css";
import UserInformation from "../userInformation/UserInformation";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchUserData } from "../../redux/thunk/user";
import { useSelector } from "react-redux";
import { userActions } from "./../../redux/slice/user";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LogInForm = () => {
  const [open, setOpen] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [userInput, setUerInput] = useState<UserType>()
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

  const initiialValues: UserType = {
    id: userInput?.id,
    name: userInput?.name,
    age: userInput?.age,
    email: userInput?.email,
    password: userInput?.password,
    telephone: userInput?.telephone,
    address: userInput?.address,
    image: userInput?.image,
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
    setUerInput(values)
    dispatch(fetchUserData(values));
    logIn()
    // if (user.email === values.email && user.password === values.password) {
    //   dispatchNorm(userActions.loginHandler(true));
    // } else {
    //   handleClick();
    // }
  };
  const logIn=()=>{
    console.log("in login function:",userInput);
    if (user.email === userInput?.email && user.password === userInput?.password) {
      dispatchNorm(userActions.loginHandler(true));
    } else {
      handleClick();
    }
  }

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
                  Log In
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
