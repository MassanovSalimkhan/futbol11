import React from 'react';
import { Button, Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';

// Заголовок
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Soccerway</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/matches">Matches</Nav.Link>
          <Nav.Link href="/teams">Teams</Nav.Link>
          <NavDropdown title="More" id="navbar-nav-dropdown">
            <NavDropdown.Item href="/news">News</NavDropdown.Item>
            <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

// Главная секция
const MainSection = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Button variant="outline-primary" size="lg" block>
            Matches
          </Button>
        </Col>
        <Col md={6}>
          <Button variant="outline-success" size="lg" block>
            Tournaments
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

// Футер
const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <p>© 2024 Soccerway</p>
      <p>All rights reserved</p>
    </footer>
  );
};

// Основной компонент
function App() {
  return (
    <div>
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
