import { Container, Form, Button, Row, Col, CardBody,Card } from "react-bootstrap";
import { useFormik } from "formik";
import { Navigationbar } from "../Navigationbar";
import axios from "axios";
import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import * as Yup from "yup";
import {useNavigate } from "react-router-dom";

export default function ServiceCenterLogin()
{
    const [providerData,setProviderData]=useState({
        email:"",
        password:""
    });

        let[error,setError]=useState({errorData:null,isError:false})

        const navigate= useNavigate();
        const handleChange=(event,property)=>{
            setProviderData({ ...providerData, [event.target.name] : event.target.value });
        }

    console.log(providerData);
    console.log("aaaaaaaaaaaaaaaaaaaaaa");

    const handleSubmit=(event)=>{
        event.preventDefault();
        navigate('/ServiceCenterHome');
        console.log(providerData);
        if( providerData.email===undefined || providerData.email.trim()==='' ){
            toast.error("Email required");
            return;
        }

       
        console.log(providerData);
        console.log("bbbbbbbbbbbbbbbbb");
        if(providerData.password===undefined||providerData.password.trim()===''){
            toast.error("password required");
            return;
        }
        console.log(providerData);
        console.log("ccccccccccccccccccccccccc");

        axios.post('http://localhost:8080/provider/login2',providerData)
        .then(response => {
            setProviderData(response.data);
            
            alert("Login Successfully");
            console.log(response.data); //custoemrId = adminID {backaend madhe naming chukley}
             sessionStorage.setItem('providerId', response.data.providerId);
             localStorage.setItem("providerId", response.data.providerId);
            // if(response.data.messageIfAny == "Login Successfull"){
            //     navigate("/ServiceCenterHome");
            // }
        })
        .catch(error => {console.error('Error fetching registration:', error)
        alert("invalid Login");
    });

    }


    return(
        <Container>
        <Navigationbar/>
            <Row>
                <Col sm={{ span: 5, offset: 3 }} className="mt-4">
                    <Card className="shadow p-4">
                        <CardBody>
                            <h4 className="mb-3">🚗Service Center Login</h4>
                            <Form onSubmit={handleSubmit} className="mb-3">
                                <Row>
                                    
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Enter Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" name="email"
                                                value={providerData.email}
                                                onChange={handleChange}
                                            
                                            />
                                        </Form.Group>
                                </Row>
                                <Row>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Enter password" name="password"
                                                value={providerData.password}
                                                onChange={handleChange}  
                                            />
                                        </Form.Group>
                                      
                                </Row>
                                <Container className="mb-2">
                               {/* <Button variant="success" type="submit" href="/UserPage">
                                    Login 
                                 </Button>*/}
                                  <Button variant="success" type="submit" onClick={handleSubmit}>
                                    Login 
                                </Button>
                                <a href="/ServiceCenterRegsitration" className="ml-5 px-5">Register Now..</a>
                                </Container> 
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}