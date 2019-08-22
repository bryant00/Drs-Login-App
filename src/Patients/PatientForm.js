import React, { useState } from "react";
import { Form, Button, Header, Container, Grid } from "semantic-ui-react";
import styled from "styled-components";



const PatientForm = props => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  return (
    <Container style={{ height: "100vh" }} >
      <Header as="h2" color="teal" textAlign="center">
        Add Patient
      </Header>
      <Form
        onSubmit={e => {
          e.preventDefault();
          props.onSubmit({ name, age, email, gender });
          setName("");
          setAge("");
          setEmail("");
          setGender("");
        }}
      >
        <Form.Input
          type="text"
          placeholder="name"
          name="name"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <Form.Input
          type="text"
          placeholder="age"
          name="age"
          onChange={e => setAge(e.target.value)}
          value={age}
        />
        <Form.Input
          type="text"
          placeholder="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <Form.Input
          type="text"
          placeholder="gender"
          name="gender"
          onChange={e => setGender(e.target.value)}
          value={gender}
        />
        <Button type="submit">Add Patient</Button>
      </Form>
    </Container>
  );
};

export default PatientForm;
