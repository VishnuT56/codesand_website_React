import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GrCodepen } from "react-icons/gr";
import './FirstNav.css';

function Function() {
  return (
    
    <Navbar collapseOnSelect expand="lg" className="navbar-custom">
      <Container>
      
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* logo size and color */}
          <Nav className="logo-Box">                             
            <GrCodepen size={50} color='blue'/>  
            <Nav.Link as={Link} to="/" >CodeBox</Nav.Link>               
          </Nav>

          <Nav className="me-auto">
            <Nav.Link as={Link} to="/features">Features</Nav.Link>
            <Nav.Link as={Link} to="/useCases">Use Cases</Nav.Link>
            <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
            <Nav.Link as={Link} to="/support">Support</Nav.Link>
            <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
          </Nav>
          <Nav >
            <Nav.Link as={Link} to="/sign">Sign In</Nav.Link>
            <Nav.Link as={Link} to="/" className='tryforfree'>Try for free</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
  
}

export default Function;