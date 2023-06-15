/* eslint-disable import/no-extraneous-dependencies */
import "./assets/styles/index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ConnexionPage from "./pages/ConnexionPage";
import NewAccount from "./pages/NewAccount";
import PostScriptPage from "./pages/PostScriptPage";
// import PostVideoPage from "./pages/PostVideoPage";
import ScriptsPage from "./pages/ScriptsPage";
// import VideosPage from "./pages/VideosPage";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<ConnexionPage />} />
          <Route path="/new" element={<NewAccount />} />
          <Route path="/newscript" element={<PostScriptPage />} />
          {/* <Route path="/newvideo" element={<PostVideoPage />} /> */}
          <Route path="/scripts" element={<ScriptsPage />} />
          {/* <Route path="/videos" element={<VideosPage />} /> */}
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
