import {Container,Form, Button,Row,Col,CardBody,Card} from "react-bootstrap";
  import axios from "axios";
  import { useState,useEffect } from "react";
  import { ToastContainer, toast } from "react-toastify";
  import { useRouteLoaderData } from "react-router-dom";
  import { Navigationbar } from "../Navigationbar";
  import { useNavigate } from "react-router-dom";
  import {useTranslation} from "react-i18next";

  export default function ServiceCenterRegsitration(){
    const {t}=useTranslation();
    const [providerData, setProviderData] = useState({
        name: "",
        email: "",
        mobileNo: "",
        password: "",
        centerName: "",
        location: "",
    });

    const[formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    let [errors, setError] = useState({ errorData: null, isError: false });

   const navigate=useNavigate();

   const handleChange = (event) => {
     console.log(event.target);
     const{name,value}=event.target;
     setProviderData({...providerData,[name]:value,});
     console.log(providerData)
   };

   const SubmitForm = (event) => {
    event.preventDefault();
    console.log(providerData);

    setFormErrors(validate(providerData));
    if(setIsSubmit(true)){
      console.log("api is call");

    }
  }
  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length==0 ){
      if(isSubmit){
        console.log("isSubmit is true");
        console.log(providerData);

        axios.post("http://localhost:8080/provider/registerv2", providerData)
      .then((response) => {
        //setProviderData(response.data);
        console.log(response.data);
        alert("Register Successful");
       // navigate('/ServiceCenterLogin')
      })
      .catch((error) => {
        console.error("Error fetching registration:", error);
        alert("Already Registered");
      });
      }
}
  },[formErrors]);

  const validate=(values)=>{
    const errors={};
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.name){
      errors.name="Name is required";
    }
    else if(values.name.length<=2)
    {
      errors.name="atleast 2 char is req";
    }
    if(!values.email){
      errors.email="email is required";
    }
    else if(!regex.test(values.email)){
      errors.email="this is not valid email";
    }
    if(!values.password){
      errors.password="password is required";
    }else if(values.password.length<6){
      errors.password="aleast 6 char is req";
    }

    if(!values.mobileNo){
      errors.mobileNo="contact is required";
    }else if(values.mobileNo.length>10){
      errors.mobileNo="invalid number";
    }
    return errors;
  }
    return (
        <Container>
          <Navigationbar />
          <Row>
            <Col sm={{ span: 6, offset: 3 }} className="mt-4">
              <Card className="shadow p-4">
                <CardBody>
                  {/*<pre>{<Json.stringify(providerData,undefined,2)}</pre>*/}
                  <h4 className="mb-3">😃Service Center Registration</h4>
                  
                  <Form onSubmit={SubmitForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>{t("Name")}</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        onChange={handleChange}
                        value={providerData.name}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <p>{formErrors.name}</p>
  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>{t("Email")}</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Email address"
                        name="email"
                        onChange={ handleChange}
                        value={providerData.email}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <p>{formErrors.email}</p>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>{t("Contact")}</Form.Label>
                      <Form.Control
                        type="Number"
                        placeholder="Enter Contact No."
                        name="mobileNo"
                        onChange={handleChange}
                        value={providerData.mobileNo}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <p>{formErrors.mobileNo}</p>
  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>{t("Password")}</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={ handleChange}
                        value={providerData.password}
                      />
                    </Form.Group>
                    <p>{formErrors.password}</p>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>{t("Center")}</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Service Center Name"
                        name="centerName"
                        onChange={handleChange}
                        value={providerData.centerName}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>{t("Location")}</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Service Center Location"
                        name="location"
                        onChange={handleChange}
                        value={providerData.location}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                   <Container className="text-center">
                      <Button variant="success" type="submit">
                        Register
                      </Button>
                    </Container>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <ToastContainer />
        </Container>
      );
  }