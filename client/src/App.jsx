import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";

import { useState } from "react";


function App() {
  const [mode, setMode] = useState(0);

  return (

      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </ Routes>  
        </BrowserRouter>
      </div>

  );
}

export default App;
