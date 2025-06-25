import NavLink from "../navLink/NavLink";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header className="py-3">
      <Container>
        <Navbar expand="lg" className="justify-content-between">
          <Navbar.Brand href="/">IUSARREND</Navbar.Brand>
          <Nav>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/services">Servicios</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/lawyers">Abogados</NavLink>
            <NavLink to="/cases">Casos</NavLink>
            <NavLink to="/contact">Contacto</NavLink>
          </Nav>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
