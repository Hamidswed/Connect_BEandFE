import React from "react";
import { UserType } from "../../types/userType";

type PropType = {
  user: UserType|undefined;
};
export default function UserInformation({ user }: PropType) {
  return (
    <div>
      UserInformation
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <p>{user?.image}</p>
    </div>
  );
}
