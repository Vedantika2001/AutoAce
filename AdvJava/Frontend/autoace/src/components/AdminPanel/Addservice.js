import React, { useEffect, useState } from "react";
//import { useHistory } from "react-router-dom";

import {
  Row,
  Container,
  Col,
  Card,
  CardBody,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import AdminNavigationbar from "./AdminNavigationbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Addservice () {
  const navigate=useNavigate();
//   //const history = useHistory();
//   const [formData, setFormData] = useState({
//     serviceName: "",
//     serviceDescription: "",
//     costOfService: "",
//     adminId : ""
    
//   });

//   // const handleInputChange = (event) => {
//   //   const { name, value } = event.target;
//   //   setFormData({ ...formData, [name]: value });
//   // };

//   const handleInputChange = (event) => {
   
//     setFormData({ ...formData, [event.target.name] : event.target.value });
//   };
  
//   // const adminId= sessionStorage.getItem('adminId');
//   // console.log(adminId);
//   // console.log(formData);
//   // // let data ={...formData, adminId: adminId.toString};
//   const adminId = sessionStorage.getItem('adminId');
//   setFormData({ ...formData, adminId: adminId });
// console.log({adminId});
// console.log(formData);
// // // let data ={...formData, adminId: adminId.toString};
// // setFormData({ ...formData, adminId: adminId });
// // console.log(formData +"ddddddddddddddddddddddddd");

//   // const handleImageChange = (event) => {
//   //   // Check if files are present
//   //   if (event.target.files && event.target.files.length > 0) {
//   //     const imageFile = event.target.files[0];
//   //     setFormData({ ...formData, serviceImage: imageFile, imageUrl: "" });
//   //   }
//   // };

//   // const handleUrlChange = (event) => {
//   //   setFormData({
//   //     ...formData,
//   //     imageUrl: event.target.value,
//   //     serviceImage: null,
//   //   });
//   // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//     // Validate form fields
//     if (
//       formData.serviceName === "" ||
//       formData.serviceDescription === "" ||
//       formData.costOfService === "") 
//       // (formData.serviceImage === null && formData.imageUrl === "")
//    {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     // Add your form submission logic here
//     // For example, you can send the data to a server or perform other actions

//     // Reset form after submission
//     setFormData({
//       serviceName: "",
//       serviceDescription: "",
//       costOfService: "",
//       admin :{
//         "id" : ""
//       }
//       // serviceImage: null,
//       // imageUrl: "",
//     });
//     // history.push("/Services");
//   };
  



const [formData, setFormData] = useState({
  name: "",
  serviceDesc: "",
  price: "",
  //adminId: ""
  admin :{
    id : ""
  }
});

useEffect(() => {
  const adminId = sessionStorage.getItem('adminId');
  
  //let adminId = localStorage.getItem('adminId');
  // setFormData({ ...formData, id: adminId });

  setFormData({ ...formData ,admin:{id: adminId}});
  
}, []); // The empty dependency array ensures that this effect runs only once when the component mounts

const handleInputChange = (event) => {
  setFormData({ ...formData, [event.target.name]: event.target.value });
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formData);

  axios.post('http://localhost:8080/admin/addService',formData)
  .then(response => {
    setFormData(response.data);
          alert("Service Added");
          navigate('/AdminPage')

  }
  )
  .catch(error => {
      console.error('Error fetching registration:', error)
      alert("Error while Adding Service");
  });

  // Add your form submission logic here
  // ...

  // Reset form after submission
  // setFormData({
  //   serviceName: "",
  //   serviceDescription: "",
  //   costOfService: "",
  //   adminId: ""
  // });
  // history.push("/Services");
};



  return (
    <Container>
    <AdminNavigationbar/>
      <Row>
        <Col sm={{ span: 6, offset: 3 }} className="mt-4">
          <Card className="shadow p-4">
            <CardBody>
              <h3 className="text-center">👉Add Services👈</h3>

              <Form onSubmit={handleSubmit} className="mb-3">
                
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Service Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Service Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Service Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Service Description"
                    name="serviceDesc"
                    value={formData.serviceDesc}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Service Cost</Form.Label>
                  <FormControl
                    type="number"
                    placeholder="Price of Service"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <p className="text-center">😊Thank you for Connecting With Us</p>

                <Container className="text-center">
                  <Button variant="success" type="submit">
                    Submit
                  </Button>
                </Container>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}