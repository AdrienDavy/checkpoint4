/* eslint-disable import/no-extraneous-dependencies */
import "./assets/styles/index.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
