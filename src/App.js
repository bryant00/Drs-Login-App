import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import { Switch, Route } from "react-router-dom";
import PrivateRouteWithProps from "./PrivateRouteWithProps";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import MainNav from "./Nav/MainNav";
import Doctors from "./Doctors/Doctors";
import Doctor from "./Doctors/Doctor";
import { Welcome } from "./Welcome/Welcome";
import Patient from "./Patients/Patient";

const App = () => {
  return (
    <Container style={{ margin: 20 }}>
      <Route path="/" component={MainNav} />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRouteWithProps exact path="/doctors" component={Doctors} />
        <PrivateRouteWithProps
          exact
          path="/doctor/:id/:username"
          component={Doctor}
        />
        <PrivateRouteWithProps exact path="/patient/:id" component={Patient} />
      </Switch>
    </Container>
  );
};

export default App;
