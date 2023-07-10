import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div>
        <button
          className="bg-blue-400 text-2xl mt-4 px-4 h-12 rounded-md hover:bg-blue-500 duration-300"
          onClick={() => loginWithRedirect()}
        >
          Sign In
        </button>
      </div>
    )
  );
};

export default Login;
