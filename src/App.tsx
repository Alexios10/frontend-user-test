import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Check login status on mount
  useEffect(() => {
    fetch("https://localhost:7000/api/auth/me", {
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.username) setLoggedIn(true);
      });
  }, []);

  const handleLogin = () => {
    // Redirect to backend Google login
    window.location.href = "https://localhost:7000/api/auth/login-google";
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
