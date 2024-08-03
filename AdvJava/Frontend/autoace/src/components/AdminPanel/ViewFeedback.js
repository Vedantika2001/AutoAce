import axios from "axios";
import React from "react";
import {Button} from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import AdminNavigationbar from "./AdminNavigationbar";
//import { Feedback } from "react-bootstrap/lib/formcontrol";


export default function ViewFeedback()
{
  const [ViewFeedback, setViewFeedback] = useState([]);
  const [Feedback, setContacts] = useState([]);
  const [feedbackList, setFeedbackList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/fetchFeedback")
      .then((response) => setViewFeedback(response.data))
      .catch((error) =>
        console.error("Error fetching booked services:", error)
      );
  }, []);

  const handleDeleteContact = (id) => {
    axios.delete(`http://localhost:8080/feedback/{id}`)
        .then(() => {
            setFeedbackList(prevFeedback => prevFeedback.filter(Feedback => Feedback.id !== id));
        })
        .catch(error => console.error('Error deleting contact:', error));
};
    return(

        <div>
      <AdminNavigationbar />
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-12 col-md-10 col-lg-8 col-xl-7">
            <h3 class="fs-5 mb-2 text-secondary text-center text-uppercase">
              🚌
            </h3>
            <h2 class="display-5 mb-5 mb-xl-9 text-center">
              View Feedback
            </h2>
          </div>
        </div>
      </div>
      <Container>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>✏️ID</th>
              <th>😊Name</th>
              <th>✉️Email</th>
              <th>📱MobileNo</th>
              <th>🏪serviceCenterName</th>
              <th>📖Comments</th>
            </tr>
          </thead>
          <tbody>
            {ViewFeedback.map((Feedback) => (
              <tr key={Feedback.id}>
                <td>{Feedback.id}</td>
                <td>{Feedback.name}</td>
                <td>{Feedback.email}</td>
                <td>{Feedback.mobileNo}</td>
                <td>{Feedback.serviceCenterName}</td>
                <td>{Feedback.comments}</td>
                {/* { <Button variant="btn btn-danger"  type="submit" className="ml-2" onClick={() => handleDeleteContact(Feedback.id)}> Delete</Button> } */}
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>

    )
}