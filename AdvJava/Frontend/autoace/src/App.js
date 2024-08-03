import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
//import { Navigationbar } from "./components/Navigationbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Services from "./components/Services";
//import Newregistration from "./components/UserPanel/NewRegistration";
//import adminRegistration from "./components/AdminRegistration";
//import AdminRegistration from "./components/AdminRegistration";
//import AdminRegistration from "./components/AdminPanel/AdminRegistration";
import AdminRegistration from "./components/AdminPanel/AdminRegistration";
import CustomerRegistration from "./components/UserPanel/CustomerRegistration";
import Adminlogin from "./components/AdminPanel/Adminlogin";
import Booking from "./components/UserPanel/Booking";
// import Login from "./components/UserPanel/Login";
//import Adminlogin from "./components/Adminlogin";
import Footer from "./components/Footer/Footer";
import AdminPage from "./components/AdminPanel/AdminPage";
import UserPage from"./components/UserPanel/UserPage";
import UserFeedback from "./components/UserPanel/UserFeedback";
import ViewContact from "./components/AdminPanel/ViewContact";
import Addservice from "./components/AdminPanel/Addservice";
import CustomerLogin from "./components/UserPanel/CustomerLogin";
import ViewBookedServices from "./components/AdminPanel/ViewBookedServices";
import ShowBooking from "./components/UserPanel/ShowBooking";
import ViewFeedback from "./components/AdminPanel/ViewFeedback";
import ViewCustomerBookedServices from "./components/UserPanel/ViewCustomerBookedServices";
import ServiceCenterRegsitration from "./components/ServiceCenterPanel/ServiceCenterRegsitration";
import ServiceCenterLogin from "./components/ServiceCenterPanel/ServiceCenterLogin";
import ServiceCenterHome from "./components/ServiceCenterPanel/ServiceCenterHome";
import RequestService from "./components/ServiceCenterPanel/RequestService";
import InvoiceService from "./components/ServiceCenterPanel/InvoiceService";
import SendConfirmation from "./components/ServiceCenterPanel/SendConfirmation";
import RoomPage from "./components/ServiceCenterPanel/RoomIndex";
import Payment from "./components/UserPanel/Payment";
import ViewBookingServices from "./components/ServiceCenterPanel/ViewBookingServices";
//import ServiceCenterHome from "./components/ServiceCenterPanel/ServiceCenterHome";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/AdminPage" element={<AdminPage />}></Route>
        <Route path="/AdminRegistration" element={<AdminRegistration />}></Route>
        {/* <Route path="/Login" element={<Login />}></Route> */}
        <Route path="/Adminlogin" element={<Adminlogin />}></Route>
      </Routes>

      <Routes>
       <Route path="/AdminPage" element={<AdminPage />}></Route>
       <Route path="/ViewContact" element={<ViewContact/>}></Route>
       <Route path="/Addservice" element={<Addservice/>}></Route>
       <Route path="/ViewBookedServices" element={<ViewBookedServices/>}></Route>
       <Route path="/ViewFeedback" element={<ViewFeedback/>}></Route>
      </Routes>

      <Routes>
      <Route path="/Booking" element={<Booking />}></Route>
      <Route path="/UserPage" element={<UserPage />}></Route>
      <Route path="/UserFeedback" element={<UserFeedback />}></Route>
      <Route path="/CustomerRegistration" element={<CustomerRegistration/>}></Route>
      <Route path="/CustomerLogin" element={<CustomerLogin/>}></Route>
      {/* <Route path="/ShowBooking" element={<ShowBooking/>}></Route> */}
      <Route path="/ViewCustomerBookedServices" element={<ViewCustomerBookedServices/>}></Route>
      </Routes>

     <Routes>
     <Route path="/ServiceCenterRegsitration" element={<ServiceCenterRegsitration />}></Route>
     <Route path="/ServiceCenterLogin" element={<ServiceCenterLogin />}></Route>
     <Route path="/ServiceCenterHome" element={<ServiceCenterHome />}></Route>
     <Route path="/RequestService" element={<RequestService />}></Route>
     <Route path="/InvoiceService" element={<InvoiceService />}></Route>
     <Route path="/Payment" element={<Payment />}></Route>
     <Route path="/SendConfirmation" element={<SendConfirmation />}></Route>
     <Route path="/room/:roomId" element={<RoomPage />}></Route>
     <Route path="/ViewBookingServices" element={<ViewBookingServices />}></Route>
     </Routes>
      {/* <Routes>
        <Route path="/ServiceCenterRegsitration" element={<ServiceCenterRegsitration/>}</Route>
      </Routes> */}

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
