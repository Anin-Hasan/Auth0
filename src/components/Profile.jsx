import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="flex flex-col m-20">
        <div className="flex justify-center">
          {user?.picture && (
            <img className="rounded-full h-52 w-52" src={user.picture} />
          )}
        </div>
        {Object.keys(user).map((item) => (
          <li className="text-2xl">
            {item}:{user[item]}
          </li>
        ))}
      </div>
    )
  );
};

export default Profile;
