import { AppDispatch } from "../store";
import { userActions } from "./../slice/user";
import { InitialType } from "../../components/userForm/LogInForm";

const url = "http://localhost:8000/users";

export function fetchUserData(values: InitialType) {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    dispatch(userActions.getUser(data));
    console.log(data, "data in thunk");
  };
}
