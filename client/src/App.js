import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

// import Auth from "./utils/auth";

// pages and components
import Header from "./components/Header";
import Login from "./components/Login";
// import Developers from "../pages/Developers";
// import Jobs from "../pages/Jobs";
// import Profile from "../pages/Profile";
// import Login from "../Login";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
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
      <div>
        <Login />
      </div>
    </ApolloProvider>
  );
}

export default App;
