import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavigationbar from './AdminNavigationbar';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const ViewContact = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/contacts')
            .then(response => setContacts(response.data))
            .catch(error => console.error('Error fetching contacts:', error));
    }, []);


    const handleDeleteContact = (id) => {
      axios.delete(`http://localhost:8080/api/contacts/${id}`)
          .then(() => {
              setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
          })
          .catch(error => console.error('Error deleting contact:', error));
  };

    return ( 
        <div>
        <AdminNavigationbar/>
        <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7">
        <h3 class="fs-5 mb-2 text-secondary text-center text-uppercase">📱Contact Us..📱</h3>
       
        <h2 class="display-5 mb-5 mb-xl-9 text-center">We Are The Future Of Where Excellence With Affordability..</h2>
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
            <th>📱Mobile No</th>
            <th>📖Description</th>
            {/* Add more columns based on your contact data */}
          </tr>
        </thead>
          <tbody>
          {contacts.map(contact => (
              <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.mobileNo}</td>
              <td>{contact.comment}</td>
              <Button variant="btn btn-danger"  type="submit" className="ml-2" onClick={() => handleDeleteContact(contact.id)}> Delete</Button> 
            </tr>
          ))}
        </tbody>
      </table>
      <Button variant="btn btn-success" type="submit" className="ml-10" href='/AdminPage'>Go Back</Button>
      </Container>
    </div>

    );
};

export default ViewContact;
