import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <button
          className="bg-blue-400 text-2xl mt-4 px-4 h-12 rounded-md hover:bg-blue-500 duration-300"
          onClick={() => logout()}
        >
          Sign Out
        </button>
      </div>
    )
  );
};

export default Logout;
