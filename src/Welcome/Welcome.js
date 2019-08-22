import React from "react";
import { Container, Button, Icon, Header } from "semantic-ui-react";
import Doctors from "../Doctors/Doctors";
import { Link } from "react-router-dom";

export const Welcome = props => {
  return (
    <Container style={{ height: "100vh" }}>
      <Header
        as="h1"
        content="Welcome to Immunizations Tracking"
        inverted
        style={{
          fontSize: "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: "3em",
          color: "black"
        }}
      />
      <Header
        as="h2"
        content="Immunization History In Your Pocket."
        inverted
        style={{
          fontSize: "1.7em",
          fontWeight: "normal",
          marginTop: "1.5em",
          color: "black"
        }}
      />

      <Link to={"/login"}>
        <Button primary size="huge">
          Login
          <Icon name="right arrow" />
        </Button>
      </Link>

      <Link to={"/signup"}>
        <Button secondary size="huge">
          Sign Up
          <Icon name="right arrow" />
        </Button>
      </Link>
    </Container>
  );
};
