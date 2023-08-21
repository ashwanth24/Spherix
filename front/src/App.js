import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile"
import Register from "./pages/register/Register"
import Messenger from "./pages/messenger/Messenger";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";



function App() {
  const {user}= useContext(AuthContext)
  return (

<Router>
  <Routes>
    <Route exact path="/" element={user?<Home/> : <Register/>} />
  </Routes>
  <Routes>
    <Route path="/login" element={user?<Navigate to="/"/>:<Login/>} />
  </Routes>
  <Routes>
    <Route path="/register" element={user?<Navigate to="/"/> :<Register/>} />
  </Routes>
  <Routes>
    <Route path="/messenger" element={!user?<Navigate to="/"/> :<Messenger/>} />
  </Routes>
  <Routes>
    <Route path="/profile/:username" element={<Profile/>} />
  </Routes>
</Router>
   
  );
}

export default App;
