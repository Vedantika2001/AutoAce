import React from "react";
import { Container, Nav, Navbar, Toast } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import {useNavigate } from "react-router-dom";
//import { useHistory } from "react-router-dom";
import {Button} from 'react-bootstrap';
// import Button from "react-bootstrap";

export default function ServiceNavigationbar() {
  //const history = useHistory();
  const logout=(event)=>{
    localStorage.clear();
    event.preventDefault();
    window.location.href = '/';
    //history.push('/login');
  }
  return (

    // <Navbar expand="lg" className="bg-body-tertiary">
    //       <Container>
    //           <Navbar.Brand href="#home">MyApp</Navbar.Brand>
    //           <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //           <Navbar.Collapse id="basic-navbar-nav">
    //               <Nav className="me-auto">
    //                   <LinkContainer to="/">
    //                       <Nav.Link>Home</Nav.Link>
    //                   </LinkContainer>
    //                   <LinkContainer to="/about">
    //                       <Nav.Link>About Us</Nav.Link>
    //                   </LinkContainer>
    //                   <LinkContainer to="/contact">
    //                       <Nav.Link>Contact Us</Nav.Link>
    //                   </LinkContainer>
    //               </Nav>
    //           </Navbar.Collapse>
    //       </Container>
    //   </Navbar>
    <Navbar expand="lg" className="bg-body-tertiary sticky-top" >
      <Container>
        <Navbar.Brand href="#home">🛠️AUTOACE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/RequestService">
              <Nav.Link>📧Request Message</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/ViewBookingServices">
              <Nav.Link>📕View Booking..</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/">
              <Nav.Link>📖View Feedback..</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/SendConfirmation">
              <Nav.Link>⭐Video Call</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/InvoiceService">
              <Nav.Link>📄Generate Invoice</Nav.Link>
            </LinkContainer>

            {/* <LinkContainer to="/RequestService">
              <Nav.Link>📧Request Message</Nav.Link>
            </LinkContainer> */}
            <Button className="btn-success me-10 " onClick={logout}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
