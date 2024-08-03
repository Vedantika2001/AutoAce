import { Container, Form, Button, Row, Col, CardBody,Card } from "react-bootstrap";
import { useFormik } from "formik";
import { Navigationbar } from "../Navigationbar";
import axios from "axios";
import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import * as Yup from "yup";
import {useNavigate } from "react-router-dom";

export default function CustomerLogin(){
const [customerData,setCustomerData]=useState({
    email:"",
    password:""
    });
    console.log(customerData)
    let[error,setError]=useState({errorData:null,isError:false})

    const navigate= useNavigate();
    const handleChange=(event,property)=>{
        setCustomerData({
            ...customerData,
            [event.target.name] : event.target.value
        })
    }
    console.log(customerData);
    console.log("aaaaaaaaaaaaaaaaaaaaaa");

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(customerData);
        if(customerData.email===undefined||customerData.email.trim()===''){
            toast.error("Email required");
            return;
        }
        if(customerData.password===undefined||customerData.password.trim()===''){
            toast.error("password required");
            return;
        }
            axios.post('http://localhost:8080/customer/login',customerData)
                .then(response => {
                    
                   setCustomerData(response.data);
                   console.log(response.data.customerId);
                   sessionStorage.setItem('customerId', response.data.customerId);
                    alert(response.data.messageIfAny);
                   if(response.data.messageIfAny == "Login Successfull"){
                    navigate("/UserPage");
                   }
                   else{
                    alert("Invalid Email/Password")
                   }
                })
                .catch(error => {console.error('Error fetching registration:', error)
                alert("invalid Login");
        });
    }   
    return (
        <Container>
        <Navigationbar/>
            <Row>
                <Col sm={{ span: 5, offset: 3 }} className="mt-4">
                    <Card className="shadow p-4">
                        <CardBody>
                            <h4 className="mb-3">🚗Customer Login</h4>
                            <Form onSubmit={handleSubmit} className="mb-3">
                                <Row>
                                    
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Enter Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" name="email"
                                                value={customerData.email}
                                                onChange={handleChange}
                                            
                                            />
                                        </Form.Group>
                                </Row>
                                <Row>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter password" name="password"
                                                value={customerData.password}
                                                onChange={handleChange}  
                                            />
                                        </Form.Group>
                                      
                                </Row>
                                <Container className="mb-2">
                               {/* <Button variant="success" type="submit" href="/UserPage">
                                    Login 
                                 </Button>*/}
                                  <Button variant="success" type="submit">
                                    Login 
                                </Button>
                                <a href="/CustomerRegistration" className="ml-5 px-5">Register Now..</a>
                                </Container>
                                
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
