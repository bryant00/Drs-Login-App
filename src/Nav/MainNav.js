import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Menu, Container, Image, Icon, Dropdown } from "semantic-ui-react";

const MainNav = props => {
  const [activeItem, setActiveItem] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);

  useEffect(() => {
    const hasToken = () => {
      localStorage.getItem("token") ? setLoggedIn(true) : setLoggedIn(false);
    };
    hasToken();
    setLoggingIn(false);
  }, [loggingIn]);

  const navAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      setLoggedIn(true);
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      setLoggedIn(false);
      localStorage.clear();
      setTimeout(cb, 100);
    },
    logIn(cb) {
      setLoggingIn(true);
    }
  };
  return (
    <Menu fixed="top" inverted>
      {console.log(`mainNav: ${loggedIn}`)}
      <Container>
        <Menu.Item
          header
          as={Link}
          to="/"
          name="home"
          active={activeItem === "home"}
          content="Home"
          onClick={() => setActiveItem("home")}
        >
          <Image style={{ marginRight: "1.5em" }}>
            <Icon name="hospital outline" size="large" color="red" />
          </Image>
          Home
        </Menu.Item>

        <Dropdown item simple text="More">
          <Dropdown.Menu>
            <Dropdown.Item
              as={Link}
              to="/login"
              name="login"
              active={activeItem === "login"}
              content="Login"
              onClick={() => {
                navAuth.logIn(() => setActiveItem("login"));
              }}
            />
            <Dropdown.Item
              as={Link}
              to="/signup"
              name="signup"
              active={activeItem === "signup"}
              content="Sign Up"
              onClick={() => setActiveItem("signup")}
            />
            <Dropdown.Item
              name="logout"
              active={activeItem === "logout"}
              content="Logout"
              onClick={() => {
                navAuth.signout(() => props.history.push("/"));
                //localStorage.clear()
                //props.history.push("/");
              }}
            />
          </Dropdown.Menu>
        </Dropdown>
        {loggedIn ? (
          <Menu.Item
            as={Link}
            to="/doctors"
            name="doctors"
            active={activeItem === "doctors"}
            content="Doctors"
            onClick={() => setActiveItem("doctors")}
          />
        ) : (
          <></>
        )}
      </Container>
    </Menu>
  );
};

export default MainNav;
