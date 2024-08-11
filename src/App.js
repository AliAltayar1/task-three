import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Verification from "./components/verification/Verification";
import Welcome from "./components/welcome/Welcome";
import { DarkModeProvider } from "./DarkModeContext";
import { DirectionProvider } from "./DirectionContext";

function App() {
  return (
    <Router>
      <DarkModeProvider>
        <DirectionProvider>
          <div className="App">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="*" element={<Navigate to="/signup" />} />
            </Routes>
          </div>
        </DirectionProvider>
      </DarkModeProvider>
    </Router>
  );
}

export default App;
