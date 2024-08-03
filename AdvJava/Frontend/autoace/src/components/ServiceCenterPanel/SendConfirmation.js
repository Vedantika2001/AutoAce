import ServiceNavigationbar from "./ServiceNavigationBar";
import { Container as ReactContainer } from "react"; // Renamed Container import to avoid conflict
import { useNavigate } from "react-router-dom";
import ketki from "./ketki.jpeg";
import vedantika from "./Vedantika.jpeg";
import Chetan from "./chetan.jpeg";
import Vikrant from "./vikrant.jpeg"
import React, { useState, useCallback } from "react";

export default function SendConfirmation() {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const handleJoinRoom=useCallback(()=>{
        navigate(`/room/${value}`)
    },[navigate,value])
    return (
          <div>
            <ServiceNavigationbar />

<section class="py-3 py-md-5 py-xl-8">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h2 class="mb-4 display-5 text-center">😊ADMIN..😊</h2>
        <p class="text-secondary mb-5 text-center lead fs-4">👉You Can Have One To One Video Call With Admin</p>
        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
      </div>
    </div>
  </div>

  <div class="container overflow-hidden">
    <div class="row justify-content-lg-around gy-5 gy-md-6">
      <div class="col-12 col-sm-6 col-lg-5">
        <div class="col-xl-11 col-xxl-10 mx-auto text-center">
        <img class="img-fluid rounded rounded-circle mb-4 ml-25 mx-auto d-block " loading="lazy" src={Vikrant} alt="heropageImg" style={{height:'88px'}} />
          <p class="mb-2">AutoAce aim high,Without great customer service, you can’t succeed at any business..</p>
          <p class="m-0 fw-bold">Vikrant Gawale</p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-5">
        <div class="col-xl-11 col-xxl-10 mx-auto text-center">
          <img class="img-fluid rounded rounded-circle mb-4 ml-25 mx-auto d-block " loading="lazy" src={ketki} alt="heropageImg" style={{height:'88px'}} />
          <p class="mb-2">We believe to be intellactual with our customer,family and friends</p>
          <p class="m-0 fw-bold">Ketki Lanjewar</p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-5">
        <div class="col-xl-11 col-xxl-10 mx-auto text-center">
        <img class="img-fluid rounded rounded-circle mb-4 ml-25 mx-auto d-block " loading="lazy" src={Chetan} alt="heropageImg" style={{height:'88px'}} />
          <p class="mb-2">Excellence Driven, Service Guaranteed AutoAce Service,Experience the Difference</p>
          <p class="m-0 fw-bold">Chetan Kamde</p>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-5">
        <div class="col-xl-11 col-xxl-10 mx-auto text-center">
        <img class="img-fluid rounded rounded-circle mb-4 ml-25 mx-auto d-block " loading="lazy" src={vedantika} alt="heropageImg" style={{height:'88px'}} />
          <p class="mb-2">"Committed to Your Car's Health: AutoAce Service Expert Care for Every Mile.</p>
          <p class="m-0 fw-bold">Vedantika Patil</p>
        </div>
      </div>
    </div>
  </div>
</section>

           
<div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',  
    height: '100vh', 
    background: 'linear-gradient(to right, #283048, #859398)', // Example gradient background
    color: '#fff', // Example text color
    borderRadius: '10px', // Example border radius
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)', // Example box shadow
    padding: '20px' // Example padding
}}>
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="text-center" placeholder="Enter Room Code" />
                <button className="btn btn-success mt-5"  onClick={handleJoinRoom}>Join</button> 
         </div>
        </div>
        
        
    );
}
