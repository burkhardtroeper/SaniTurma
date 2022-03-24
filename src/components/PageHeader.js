import logo from "../logo.svg";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Route, Switch, Redirect } from "react-router-dom";

import Appointments from "../pages/Appointments";
import MapPage from "../pages/MapPage";
import Notes from "../pages/Notes";
import TeamIntro from "../pages/TeamIntro";
import Welcome from "../pages/Welcome";
import YourTeam from "../pages/YourTeam";

const PageHeader = () => {
  return (
    <div className="App">
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Navbar.Brand href="#">ST</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/willkommen">
              Willkommen
            </Nav.Link>
            <Nav.Link as={Link} to="/team-intro">
              Team-Intro
            </Nav.Link>
            <Nav.Link as={Link} to="/karte">
              Karte
            </Nav.Link>
            <Nav.Link as={Link} to="/ihr-team">
              Ihr Team
            </Nav.Link>
            <Nav.Link as={Link} to="/termine">
              Termine
            </Nav.Link>
            <Nav.Link as={Link} to="/notizen">
              Notizen
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/" exact>
          <Redirect to="/willkommen"></Redirect>
        </Route>
        <Route path="/willkommen">
          <Welcome />
        </Route>
        <Route path="/team-intro" exact>
          <TeamIntro />
        </Route>
        <Route path="/karte">
          <MapPage />
        </Route>
        <Route path="/ihr-team">
          <YourTeam />
        </Route>
        <Route path="/termine">
          <Appointments />
        </Route>
        <Route path="/notizen">
          <Notes />
        </Route>
      </Switch>
    </div>
  );
};

export default PageHeader;
