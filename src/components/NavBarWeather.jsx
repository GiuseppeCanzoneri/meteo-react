import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarWeather = () => {
  return (
    <Navbar bg="transparent" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand className="text-dark" href="#home">
          Meteo4b
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="text-danger px-3" to="/">
              Home
            </Link>
            <Link className="text-danger" to="/favourites">
              Saved/Fav Cities
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarWeather;
