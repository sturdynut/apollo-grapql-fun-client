import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import React from "react";
import { mount } from "enzyme";
import Resume from "../";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

describe("<Resume />", () => {
  test("renders as expected", () => {
    const wrapper = mount(
      <ApolloProvider client={client}>
        <Resume />
      </ApolloProvider>
    )
      .children()
      .find("Resume");
    expect(wrapper).toMatchSnapshot();
  });
});
