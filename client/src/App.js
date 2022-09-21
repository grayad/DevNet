import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Auth from "./utils/auth";

// pages and components
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NoMatch from "./components/pages/NoMatch";
// import Developers from "../pages/Developers";
// import Jobs from "../pages/Jobs";
// import Profile from "../pages/Profile";
import AddJob from "./components/pages/AddJob";
// import Login from "../Login";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  // once signup/login page complete
  // get token
  // const token = Auth.loggedIn() ? Auth.getToken() : null;
  // return <div>{!token ? <Login /> : <Header></Header>}</div>;

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header></Header>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/addjob" element={<AddJob />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
