import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setContext } from '@apollo/client/link/context';

// import Auth from "./utils/auth";

// pages and components
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NoMatch from "./components/pages/NoMatch";
import Developers from "./components/pages/Developers";
// import Jobs from "../pages/Jobs";
import Profile from  "./components/pages/Profile";
import AddJob from "./components/pages/AddJob";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
            <Route path="/developers" element={<Developers />} />
            <Route path="/addjob" element={<AddJob />} />
            <Route path="*" element={<NoMatch />} />
            <Route path="/profile">
              <Route path=":username" element={<Profile />} />
              <Route path="" element={<Profile />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;