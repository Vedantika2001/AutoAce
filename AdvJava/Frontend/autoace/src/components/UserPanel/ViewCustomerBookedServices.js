import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import UserNavigationbar from "./UserNavigationbar";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ViewCustomerBookedServices() {
  const [viewServices, setViewServices] = useState([]);

  const customerId = sessionStorage.getItem("customerId");
  console.log(customerId);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/fetchServicesById/${customerId}`)
      .then((response) => setViewServices(response.data))
      .catch((error) =>
        console.error("Error fetching booked services:", error)
      );
  }, []);

  const handleDeleteContact = (id) => {
    if (window.confirm("Are you sure you want to delete service?")) {
      axios
        .delete(`http://localhost:8080/deleteService/${id}`)
        .then(() => {
          setViewServices((prevService) =>
            prevService.filter((view) => view.id !== id)
          );
        })
        .catch((error) => console.error("Error deleting contact:", error));
    }
  };

  const navigate = useNavigate();

  const editBooking = () => {
    navigate("/EditBooking");
  };

  return (
    <div>
      <UserNavigationbar />
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-12 col-md-10 col-lg-8 col-xl-7">
            <h3 class="fs-5 mb-2 text-secondary text-center text-uppercase">
              🚌
            </h3>

            <h2 class="display-5 mb-5 mb-xl-9 text-center">
              Your All Booked Services
            </h2>
          </div>
        </div>
      </div>
      <Container>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Service Name</th>
              <th>Vehicle Name</th>
              <th>Vehicle Registartion Number</th>
              <th>Extra Service Information</th>
              <th>Location</th>
              <th>Servicing Date</th>
              {/* Add more columns based on your contact data */}
            </tr>
          </thead>
          <tbody>
            {viewServices.map((view) => (
              <tr key={view.id}>
                <td>{view.id}</td>
                <td>{view.serviceTable.name}</td>
                <td>{view.vehicleModelName}</td>
                <td>{view.vehicleRegistrationNo}</td>
                <td>{view.extraServiceDesc}</td>
                <td>{view.serviceCenter}</td>
                <td>{view.serviceDate}</td>
                <Button variant="btn btn-primary" type="submit" className="ml-2" onClick={() => editBooking()} >
                  {" "}Update{" "}
                </Button>
                <Button variant="btn btn-danger" type="submit" className="ml-2" onClick={() => handleDeleteContact(view.id)} >
                  {" "}Delete{" "}
                </Button>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default ViewCustomerBookedServices;
