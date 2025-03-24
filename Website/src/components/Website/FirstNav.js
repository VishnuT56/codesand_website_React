// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
// import { GrCodepen } from "react-icons/gr";
// import './FirstNav.css';

// function Function() {
//   return (
    
//     <Navbar collapseOnSelect expand="lg" className="navbar-custom">
//       <Container>
      
//         <Navbar.Collapse id="responsive-navbar-nav">
//           {/* logo size and color */}
//           <Nav className="logo-Box">                             
//             <GrCodepen size={50} color='blue'/>  
//             <Nav.Link as={Link} to="/" className='nav-first'>CodeBox</Nav.Link>               
//           </Nav>

//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/features" className='nav-first'>Features</Nav.Link>
//             <Nav.Link as={Link} to="/useCases" className='nav-first'>Use Cases</Nav.Link>
//             <Nav.Link as={Link} to="/resources" className='nav-first'>Resources</Nav.Link>
//             <Nav.Link as={Link} to="/support" className='nav-first'>Support</Nav.Link>
//             <Nav.Link as={Link} to="/pricing" className='nav-first'>Pricing</Nav.Link>
          
          
//             <Nav.Link as={Link} to="/sign"className='nav-second'>Sign In</Nav.Link>
//             <Nav.Link as={Link} to="/" className='tryforfree'>Try for free</Nav.Link>
//             </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
    
//   );
  
// }

// export default Function;


import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { GrCodepen } from "react-icons/gr";
import './FirstNav.css';

function Function() {
  return (
    
      
        <Nav>
          {/* logo size and color */}
          <Nav className="logo-Box">                             
            <GrCodepen size={50} color='blue'/>  
            <Nav.Link as={Link} to="/" className='nav-first'>CodeBox</Nav.Link>               
          
            {/* <Nav className="me-auto"> */}
            <Nav.Link as={Link} to="/features" className='nav-second'>Features</Nav.Link>
            <Nav.Link as={Link} to="/useCases" className='nav-second'>Use Cases</Nav.Link>
            <Nav.Link as={Link} to="/resources" className='nav-second'>Resources</Nav.Link>
            <Nav.Link as={Link} to="/support" className='nav-second'>Support</Nav.Link>
            <Nav.Link as={Link} to="/pricing" className='nav-second'>Pricing</Nav.Link>
            <Nav.Link as={Link} to="/sign"className='nav-third'>Sign In</Nav.Link>
            <Nav.Link as={Link} to="/" className='tryforfree'>Try for free</Nav.Link>
          </Nav>
        </Nav>
        
   
  );
  
}

export default Function;