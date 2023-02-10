import React from "react";
import { UserType } from "../../types/userType";
import Avatar from "@mui/material/Avatar";
import "./userInformation.css";
import { Button } from "@mui/material";

type PropType = {
  user: UserType | undefined;
};
export default function UserInformation({ user }: PropType) {
  return (
    <div className="user-info">
      UserInformation
      <Avatar
        alt={user?.name}
        src={user?.image}
        sx={{ width: 64, height: 64 }}
      />
      <p>name: {user?.name}</p>
      <p>email: {user?.email}</p>
      <Button>Log out</Button>
    </div>
  );
}
