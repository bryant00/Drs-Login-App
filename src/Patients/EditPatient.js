import { Card, Button, Form, Header } from "semantic-ui-react";
import React, { Fragment, useState, useEffect, useCallback } from "react";
import useRouteProps from "../UseRouteProps";

const EditPatient = props => {
  const [user, setUser] = useState(props.patient);

  useEffect(() => {
    setUser(props.patient);
  }, []);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        user.id=props.dId;
        props.setRevisedUser(user);
        props.reviseUser(user.record_id, user);
      }}
    >
      <Header as="h2" textAlign="center">
        Edit Patient
      </Header>
      <Form.Input
        type="text"
        placeholder={props.patient.patient_name}
        name="patient_name"
        onChange={handleInputChange}
        value={user.patient_name}
      />
      <Form.Input
        type="text"
        placeholder={props.patient.DoB}
        name="DoB"
        onChange={handleInputChange}
        value={user.DoB}
      />
      <Form.Input
        type="text"
        placeholder={props.patient.record_id}
        name="record_id"
        onChange={handleInputChange}
        value={user.record_id}
      />
      <Form.Input
        type="text"
        placeholder={props.patient.Doctor}
        name="Doctor"
        onChange={handleInputChange}
        value={user.Doctor}
      />

      <Button>Confirm Changes</Button>
    </Form>
  );
};

export default EditPatient;
