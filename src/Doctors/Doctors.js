import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import AxiosAuth from "../AxiosAuth";
import {
  Card,
  Container,
  Loader,
  Icon,
  Header,
  Image
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import RouterContext from "../RouterContext";

const Doctors = props => {
  const routeProps = {
    match: props.match,
    history: props.history,
    location: props.location
  };

  //const url = "http://localhost:4000/api/doctors";
  const url = "https://immu-tracker2.herokuapp.com/api/doctors";

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const result = await AxiosAuth().get(url);
    const { data } = await result;
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
    return () => console.log("The Effect Hook has been cleaned up.");
  }, [url]);

  return (
    <Container style={{ marginTop: "5em", textTransform: "capitalize" }}>
      <Header as="h1">Welcome Doctors</Header>
      {isLoading ? (
        <Fragment>
          <Loader active inline className="slow red" />
        </Fragment>
      ) : (
        <Card.Group itemsPerRow={2} centered>
          {data.map(d => (
            <Card key={d.id}>
              <Card.Content>
                <Image floated="right">
                  <Icon name="doctor" size="huge" color="green" />
                </Image>
                <Card.Header>{`Dr. ${d.username}`}</Card.Header>
                <Card.Meta>{`ID #${d.id}`}</Card.Meta>
                <Card.Description>
                  {`Welcome Dr. ${d.username}!`}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Link to={`/doctor/${d.id}/${d.username}`}>
                  <Icon name="user" color="blue" />
                  Go to Patients
                </Link>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      )}
    </Container>
  );
};

export default Doctors;
