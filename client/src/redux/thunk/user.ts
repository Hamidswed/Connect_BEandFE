import { AppDispatch } from "../store";
import { userActions } from './../slice/user';
import { UserType } from "../../types/userType";

const url = "http://localhost:8000/users";

export function fetchUserData(values: UserType) {
  return async (dispatch: AppDispatch) => {
   const response =  await fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
    const data = await response.json()
    dispatch(userActions.getUser(data));
    console.log(data,'data in thunk')
  };
}
