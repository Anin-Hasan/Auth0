import { useAuth0 } from "@auth0/auth0-react";
import Login from "./components/login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
function App() {
  const { isLoading, error } = useAuth0;
  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-3xl">Auth0 Login</h1>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}

      {!error && !isLoading && (
        <div className="flex flex-col items-center mt-8">
          <Login />
          <Logout />
          <Profile />
        </div>
      )}
    </div>
  );
}

export default App;
