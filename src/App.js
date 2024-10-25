import "./App.css";
import { Button } from "antd";
import LoginReg from "./components/Login";
import VotePage from "./components/VotePage";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("authToken"));

  const logout = () => {
    localStorage.removeItem("authToken"); // Remove token
    setToken(null); // Update state to re-render
  };

  const handleLogin = (newToken) => {
    localStorage.setItem("authToken", newToken);
    setToken(newToken); // Update the token state
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>BallotGo</h1>
        <p>BallotGo Dashboard</p>
        {token ? (
          <>
            <VotePage />
            <Button
              type="primary"
              onClick={logout}
              style={{ marginTop: "20px" }}
            >
              Logout
            </Button>
          </>
        ) : (
          <LoginReg onLogin={handleLogin} /> // Pass the handleLogin function as a prop
        )}
      </header>
    </div>
  );
}

export default App;
