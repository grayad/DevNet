import React from "react";

import Auth from "./utils/auth";

// pages and components
import Header from "./components/Header";
import Login from "./components/Login";
// import Developers from "../pages/Developers";
// import Jobs from "../pages/Jobs";
// import Profile from "../pages/Profile";
// import Login from "../Login";

function App() {
  // get token
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  return <div>{!token ? <Login /> : <Header></Header>}</div>;
}

export default App;
