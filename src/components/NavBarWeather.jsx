import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavbarWeather = () => {
  return (
    <Navbar bg="dark " variant="dark" sticky="top">
      <Container>
        <Navbar.Brand className="text-dark" href="#home">
          <img src={logo} alt="logo" className="miniatura" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="text-decoration-none text-white display-4 fs-5 px-3" to="/">
              Home
            </Link>
            <Link className="text-decoration-none text-white display-4 fs-5" to="/favourites">
              Preferiti
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarWeather;
