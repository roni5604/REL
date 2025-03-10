import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/logo.jpeg';
import './NavbarREL.css';

export default function NavbarREL() {
  return (
    <Navbar expand="lg" fixed="top" bg="light" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#top">
          <img src={logo} alt="REL GROUP" className="rounded-circle mb-3"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav"/>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto"> {/* Changed from me-auto to ms-auto */}
            <Nav.Link href="#team">הצוות שלנו</Nav.Link>
            <Nav.Link href="#investment-process">תהליך ההשקעה</Nav.Link>
            <Nav.Link href="#loans">הלוואות נדל״ן</Nav.Link>
            <Nav.Link href="#testimonials">לקוחות ממליצים</Nav.Link>
            <Nav.Link href="#projects">פרויקטים אחרונים</Nav.Link>
            <Nav.Link href="#faq">שאלות נפוצות</Nav.Link>
            <Nav.Link href="#contact">צור קשר</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}