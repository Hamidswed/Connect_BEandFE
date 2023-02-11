import Avatar from "@mui/material/Avatar";
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
      <p>User Information</p>
      <Avatar
        alt={user.name}
        src={user.image}
        sx={{ width: 128, height: 128 }}
      />
      <p>
        <strong>name:</strong> {user.name}
      </p>
      <p>
        <strong>email:</strong> {user.email}
      </p>
      <Button onClick={() => dispatch(userActions.loginHandler(false))}>
        Log out
      </Button>
    </div>
  );
}
