import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import "./userInformation.css";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { userActions } from "./../../redux/slice/user";

export default function UserInformation() {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
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
      <Button onClick={() => dispatch(userActions.loginHandler(false))}>
        Log out
      </Button>
    </div>
  );
}
