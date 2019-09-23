import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import React from "react";
import Resume from "./Resume";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <Resume />
  </ApolloProvider>
);

export default App;
