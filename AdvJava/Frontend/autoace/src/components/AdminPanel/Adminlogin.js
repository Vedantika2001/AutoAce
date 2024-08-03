import { Container, Form, Button, Row, Col, CardBody,Card } from "react-bootstrap";
import { useFormik } from "formik";
import { Navigationbar } from "../Navigationbar";
import axios from "axios";
import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import * as Yup from "yup";
import {useNavigate } from "react-router-dom";

export default function Adminlogin(){
const [adminData,setAdminData]=useState({
    email:"",
    password:""
    });

    let[error,setError]=useState({errorData:null,isError:false})


   const navigate= useNavigate();
    const handleChange=(event,property)=>{
        setAdminData({ ...adminData, [event.target.name] : event.target.value });
    }

    console.log(adminData);
    console.log("aaaaaaaaaaaaaaaaaaaaaa");

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(adminData);
        if(adminData.email===undefined||adminData.email.trim()===''){
            toast.error("Email required");
            return;
        }
        console.log(adminData);
        console.log("bbbbbbbbbbbbbbbbb");
        if(adminData.password===undefined||adminData.password.trim()===''){
            toast.error("password required");
            return;
        }
        console.log(adminData);
        console.log("ccccccccccccccccccccccccc");

            axios.post('http://localhost:8080/admin/login',adminData)
                .then(response => {
                    setAdminData(response.data);
                    
                    alert("Login Successfully");
                    console.log(response.data.customerId); //custoemrId = adminID {backaend madhe naming chukley}
                    sessionStorage.setItem('adminId', response.data.adminId);
                    localStorage.setItem("adminId", response.data.adminId);
                    if(response.data.messageIfAny == "Login Successfull"){
                        navigate("/AdminPage");
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
                            <h4 className="mb-3">👉Admin Login👈</h4>
                            <Form onSubmit={handleSubmit} className="mb-3">
                                <Row>
                                    
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>🖊️Enter Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" name="email"
                                                values={adminData.email}
                                                onChange={handleChange}
                                            
                                            />
                                        </Form.Group>
                            
                                    
                                </Row>
                                <Row>
                                
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>✏️Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter password" name="password"
                                                values={adminData.password}
                                                onChange={handleChange}
                                                
                                            />
                                        </Form.Group>
                                      
                                </Row>
                                <Container className="mb-2">
                                {/* <Button variant="success" type="submit" href="/AdminPage">
                                    Login 
                                </Button> */}
                                <Button variant="success" type="submit">
                                    Login 
                                </Button>
                                <a href="/AdminRegistration" className="ml-5 px-5">Register Now..</a>
                                </Container>
                                
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
