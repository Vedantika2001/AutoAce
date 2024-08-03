
import {Container,Form, Button,Row,Col,CardBody,Card} from "react-bootstrap";
  import axios from "axios";
  import { useState,useEffect } from "react";
  import { ToastContainer, toast } from "react-toastify";
  import { Navigationbar } from "../Navigationbar";
  import { useNavigate } from "react-router-dom";
  import {useTranslation} from "react-i18next";
  
  

  

  export default  function AdminRegistration() {

    const {t}=useTranslation();
    const [adminData, setAdminData] = useState({
      adminName: "",
      email: "",
      mobileNo: "",
      password: "",
    });
    const[formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
   let [errors, setError] = useState({ errorData: null, isError: false });

   const navigate=useNavigate();

    const handleChange = (event) => {
      console.log(event.target);
      const{name,value}=event.target;
      setAdminData({...adminData,[name]:value,});
      console.log(adminData)
    };
const SubmitForm = (event) => {
      event.preventDefault();
      console.log(adminData);

      setFormErrors(validate(adminData));
      if(setIsSubmit(true)){
        console.log("api is call");

      }
    }
      useEffect(()=>{
      console.log(formErrors);
      if(Object.keys(formErrors).length==0 ){
        if(isSubmit){
          console.log("isSubmit is true");
          console.log(adminData);

          axios
        .post("http://localhost:8080/admin/register", adminData)
        .then((response) => {
          setAdminData(response.data);
          alert("Register Successful");
          navigate('/Adminlogin')
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
      if(!values.adminName){
        errors.adminName="Name is required";
      }
      else if(values.adminName.length<=2)
      {
        errors.adminName="atleast 2 char is req";
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
      }if(!values.mobileNo){
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
                {/*<pre>{<Json.stringify(adminData,undefined,2)}</pre>*/}
                <h4 className="mb-3">😃Admin Registration</h4>
                <Form onSubmit={SubmitForm}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{t("Name")}</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      name="adminName"
                      onChange={handleChange}
                      value={adminData.adminName}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                  <p>{formErrors.adminName}</p>
<Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{t("Email")}</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email address"
                      name="email"
                      onChange={ handleChange}
                      value={adminData.email}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                  <p>{formErrors.email}</p>

<Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{t("Contact Number")}</Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Enter Contact No."
                      name="mobileNo"
                      onChange={handleChange}
                      value={adminData.mobileNo}
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
                      value={adminData.password}
                    />
                  </Form.Group>
                  <p>{formErrors.password}</p>
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
