import { Container, Form, Button, Row, Col, CardBody, Card } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import { useRouteLoaderData } from "react-router-dom";
import { Navigationbar } from "../Navigationbar";


    export default function CustomerRegistration() {
    const [customerData,setCustomerData]=useState({
    name:"",
    email:"",
    mobileNo:"",
    password:""
    });

    let[error,setError]=useState({errorData:null,isError:false})
    const handleChange=(event,property)=>{
        setCustomerData({
            ...customerData,
            [property]:event.target.value
        })
    }
    const SubmitForm=(event)=>{
        event.preventDefault();
        console.log(customerData);
        if(customerData.name===undefined||customerData.name.trim()===''){
            toast.error("Name required");
            return;
        }
        if(customerData.email===undefined||customerData.email.trim()===''){
            toast.error("Email required");
            return;
        }
        if(customerData.mobileNo===undefined||customerData.mobileNo.trim()===''){
            toast.error("Contact Number required");
            return;
        }
        if(customerData.password===undefined||customerData.password.trim()==='' ){
            toast.error("password required");
            return;
        }

        
            axios.post('http://localhost:8080/customer/register',customerData)
                .then(response => {
                    setCustomerData(response.data);
                        alert("Register Successful");
                }
                )
                .catch(error => {
                    console.error('Error fetching registration:', error)
                    alert("Alreaday Registered");
                });
        
        // try {
        //     const response =  axios.post('http://localhost:8080/admin/register',adminData);
        //     if (response.status === 200) {
        //       console.log('Regsitration submitted successfully!');
        //     } else {
        //       console.error('Failed to submit Regsitration form');
        //     }
        //   } catch (error) {
        //     console.error('Error submitting Regsitration form', error);
        //   }
        
        
    }
    // try{
    //     const response=axios.post('http://localhost:8080/api/register',adminData).then((response)=>{ 
    //     if (response.status === 200) {
    //         console.log('Regsitartion submitted successfully!');
    //       } else {
    //         console.error('Failed to Registartion form');
    //       }
    //     })
    //     .catch((error)=>{
    //         console.error('Error submitting Registartion form', error);
    //     });
       
    // }catch(error)
    // {
    //     console.log("failed to submit registration",error);
    // }

   
    return (
        <Container>
        <Navigationbar/>
            <Row>
                <Col sm={{ span: 6, offset: 3 }} className="mt-4">
                    <Card className="shadow p-4">
                        <CardBody>
                            <h4 className="mb-3">😃Customer Registration</h4>
                            <Form onSubmit={SubmitForm}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label> Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name="name"
                                        onChange={(event)=>handleChange(event,'name')}
                                        value={customerData.name} />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                            

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email address" name="email"
                                      onChange={(event)=>handleChange(event,'email')}
                                      value={customerData.email}   />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                               

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control type="Number" placeholder="Enter Contact No." name="mobileNo"
                                      onChange={(event)=>handleChange(event,'mobileNo')}
                                      value={customerData.mobileNo}   />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                


                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password"
                                     onChange={(event)=>handleChange(event,'password')}
                                     value={customerData.password} />
                                </Form.Group>

                                <Container className="text-center">
                                    <Button variant="success" type="submit">
                                        Register
                                    </Button>
                                    <a href="/CustomerLogin" className="ml-5 px-5">Login Now..</a>
                                </Container>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        <ToastContainer/>
        </Container>
    );
}
