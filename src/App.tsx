import { useEffect, useState } from "react";
import "./App.css";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/auth/me`, {
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.username) setLoggedIn(true);
      });
  }, []);

  const handleLogin = () => {
    window.location.href = `${BACKEND_URL}/api/auth/login-google`;
  };

  return (
    <>
      {loggedIn ? (
        <p>You are now logged in</p>
      ) : (
        <>
          <p>Not logged in</p>
          <button onClick={handleLogin}>Login with Google</button>
        </>
      )}
    </>
  );
}

export default App;
