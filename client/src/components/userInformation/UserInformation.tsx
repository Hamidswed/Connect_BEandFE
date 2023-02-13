import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import "./userInformation.css";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { userActions } from "./../../redux/slice/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserInformation() {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userActions.loginHandler(true));
  }, [dispatch]);

  const logOut = () => {
    dispatch(userActions.loginHandler(false));
    navigate("/login");
  };
  return (
    <div className="user-info">
      <h3>User Information</h3>
      <Avatar
        alt={user.name}
        src={user.image}
        sx={{ width: 128, height: 128 }}
      />
      <Divider sx={{ width: "100%" }} />
      <div className="information">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Age:</strong> {user.age}
        </p>
        <p>
          <strong>Telephone:</strong> +{user.telephone}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
      </div>
      <Divider sx={{ width: "100%" }} />
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}
