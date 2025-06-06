import "./menu.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

export default function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="/public/imagens/logo-menu.png" alt="Holy Hype Store" />
        </Navbar.Brand>
        <div className="menu-icons">
          <CiShoppingCart size={24} />
          <CiUser size={24} />
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Produtos</Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Coleções</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Novidades</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Promoções</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Sobre Nós</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
