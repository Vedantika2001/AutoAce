import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Container } from 'react-bootstrap';
import AdminNavigationbar from './AdminNavigationbar';

function ViewBookedServices() {
    const[viewServices , setViewServices] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/fetchBookedServices')
            .then(response => setViewServices(response.data))
            .catch(error => console.error('Error fetching booked services:', error));
    }, [])

  return (
    <div>
      <AdminNavigationbar/>
        <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7">
        <h3 class="fs-5 mb-2 text-secondary text-center text-uppercase">🚌</h3>
       
        <h2 class="display-5 mb-5 mb-xl-9 text-center">All Booked Services</h2>
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
            <th>Service Center Name</th>
            <th>Servicing Date</th>
            {/* Add more columns based on your contact data */}
          </tr>
        </thead>
          <tbody>
          {viewServices.map(view => (
              <tr key={view.id}>
              <td>{view.id}</td>
              <td>{view.serviceTable.name}</td>
              <td>{view.vehicleModelName}</td>
              <td>{view.vehicleRegistrationNo}</td>
              <td>{view.extraServiceDesc}</td>
              <td>{view.serviceCenter}</td>
              <td>{view.serviceDate}</td>
              {/* <Button variant="btn btn-danger"  type="submit" className="ml-2" onClick={() => handleDeleteContact(contact.id)}> Delete</Button>  */}
            </tr>
          ))}
        </tbody>
      </table>
      </Container>
    </div>   
   
  );
};

export default ViewBookedServices

