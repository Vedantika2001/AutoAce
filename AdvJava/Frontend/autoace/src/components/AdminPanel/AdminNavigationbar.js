import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import {Button} from "react-bootstrap";
//import  { useEffect,useSelector,useDispatch,useState} from "react";

export default function AdminNavigationbar() {

  // const { data } = useSelector((store) => store.auth);
  // const dispatch = useDispatch();
  // const [isLogin,setIsLogin] = useState(false);
 const logout=()=>{

  localStorage.clear();
  window.location.href = '/';

 }

// useEffect( ()=> {
//   let email=localStorage.getItem("user");
//   if (email) {
//       setIsLogin(true);
//   }else{
//     setIsLogin(false);
//   }

//  },[isLogin]);
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

            <LinkContainer to="/Addservice">
              <Nav.Link>Add Service</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/ViewBookedServices">
              <Nav.Link>View Booking</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/ViewFeedback">
              <Nav.Link>View Feedback</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/ViewContact">
              <Nav.Link>View Contact</Nav.Link>
              </LinkContainer>

              <Button className="btn-success me-10 " onClick={logout}>Logout</Button>
              {/* onClick={() => {
                    localStorage.removeItem("user");
                    setIsLogin(false);
                    dispatch({ type: "AUTH_LOGOUT" });
                    //notify("Logged out");                    
                  }} */}
              </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
