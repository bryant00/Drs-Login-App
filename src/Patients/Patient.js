import { Card, Button, Form, Header, Image, Icon } from "semantic-ui-react";
import React, { Fragment, useState, useEffect, useCallback } from "react";
import useRouteProps from "../UseRouteProps";
import EditPatient from "./EditPatient";

const Patient = props => {
  const [match, location, history] = useRouteProps();

  return (
    <Card
      onClick={() => {
        props.handleUser(props.id);
      }}
    >
      <Card.Content>
        <Image floated="right">
          <Icon name="user" size="huge" color="blue" />
        </Image>
        <Card.Header>{props.patient.patient_name}</Card.Header>
        <Card.Meta>{props.patient.Doctor}</Card.Meta>
        <Card.Description>{props.patient.DoB}</Card.Description>
      </Card.Content>
      {props.editing == props.id ? (
        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              onClick={() => {
                props.deleteUser(props.id);
              }}
            >
              Remove Patient
            </Button>

            <Button onClick={() => props.setRevising(props.id)}>
              Edit Patient
              {console.log(props.patient)}
            </Button>
          </div>

          {props.revising == props.id ? (
            <EditPatient
              patient={props.patient}
              reviseUser={props.reviseUser}
              setRevisedUser={props.setRevisedUser}
              revisedUser={props.revisedUser}
              dId={props.dId}
            />
          ) : (
            <Fragment></Fragment>
          )}
        </Card.Content>
      ) : (
        <Fragment></Fragment>
      )}
    </Card>
  );
};

export default Patient;
