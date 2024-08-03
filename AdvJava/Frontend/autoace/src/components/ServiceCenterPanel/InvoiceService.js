import { useState,useRef } from "react"
import Footer from "./Footer"
import Notes from "./Notes"
import Table from "./Table"
import Header from "./Header"
import ServiceNavigationbar from "./ServiceNavigationBar"
import MainDetails from "./MainDetails"
import ClientDetails from "./ClientDetails"
import Dates from "./Dates"
import TableForm from "./TableForm"
import ReactToPrint from "react-to-print"


export default function InvoiceService()
{
    const [showInvoice,setShowInvoice]=useState(false)
    const[name,setName]=useState("")
    const[address,setAddress]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[vehiclename,setVehiclename]=useState("")
    const[vehicleregistrationnumber,setVehicleregistrationnumber]=useState("")
    const[clientname,setClientname]=useState("")
    const[clientaddress,setClientaddress]=useState("")
    const[invoicenumber,setInvoicenumber]=useState("")
    const[invoicedate,setInvoicedate]=useState("")
    const[duedate,setDuedate]=useState("")
    const[notes,setNotes]=useState("")
    const[description,setDescription]=useState("")
    const[quantity,setQuantity]=useState("")
    const[price,setPrice]=useState("")
    const[amount,setAmount]=useState("")
    const[list,setList]=useState([])
    const [total,setTotal]=useState(0)

    const componentRef=useRef()

    const handlePrint=()=>{
        window.print()
    }
    return(
         <>
         <ServiceNavigationbar/>
          
    <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h2 class="mb-4 display-5 text-center mt-5">👉Invoice Generation👈 </h2>
        <p class="text-secondary mb-5 text-center">🖊️Service Center need to generate invoice and send it to the Customer for it appropriate service..✏️</p>
        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
      </div>
     </div>
    </div>
            
            <main className=" p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl  bg-gray-100 mt-5 rounded shadow">
            <h5 className="ml-4 mb-5">🛠️AUTOACE..⚙️</h5>
            <ReactToPrint trigger={()=><button className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 ">Print/Download</button>}
            content={()=>componentRef.current}/>
            {showInvoice ? (
              <>
              <div ref={componentRef} className="p-5">
              <Header handlePrint={handlePrint}/>
              <MainDetails name={name} address={address}/>
              <ClientDetails clientName={clientname} clientAddress={clientaddress}/>
              <Dates invoiceNumber={invoicenumber} invoiceDate={invoicedate}  dueDate={duedate}/>
              <Table description={description} quantity={quantity} price={price} amount={amount} list={list} setList={setList} total={total} setTotal={setTotal}/>
              <Notes notes={notes}/>
              <Footer name={name} address={address} email={email} mobile={phone} vehcileName={vehiclename} vehicleRegistrationNumber={vehicleregistrationnumber} />
              
              </div> 
              <button onClick={() => setShowInvoice(false)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 ml-12 mt-5">Edit Information</button>
              </>
              ):(
                <>
                {/*name,address,email,phone,vehicle name,vehicle registration number,client name,client address,invoice number,invoice date,due date,notes*/}
                      <div className="flex flex-col justify-center gap-6">
                      <article className="grid grid-cols-2 gap-10">
                      <div className="flex flex-col">
                      <label htmlFor="name" className="ml-5" style={{ marginLeft: '50px', marginBottom: '5px' }} >Enter name</label>
                      <input type="text" name="text" id="name" placeholder="Enter your name" autoComplete="off" className="ml-12 p-2 rounded" value={name} onChange={(e)=>setName(e.target.value)}/>
                      </div>

                      <div className="flex flex-col">
                      <label htmlFor="address" className="ml-5" style={{ marginLeft: '50px',marginBottom: '5px' }}>Enter Address</label>
                      <input type="text" name="text" id="address" placeholder="Enter your address" autoComplete="off" className="ml-12 p-2 rounded" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                      </div>
                      </article>
                      

                      <article className="grid grid-cols-3 gap-10">
                      <div className="flex flex-col">
                      <label htmlFor="email" className="ml-5" style={{ marginLeft: '50px',marginBottom: '5px' }}>Enter Email</label>
                      <input type="text" name="text" id="email" placeholder="Enter your Email" autoComplete="off" className="ml-12 p-2 rounded" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                      </div>
                      
                      <div className="flex flex-col">
                      <label htmlFor="phone" className="ml-5" style={{ marginLeft: '50px',marginBottom: '5px' }}>Enter Mobile Number</label>
                      <input type="text" name="text" id="phone" placeholder="Enter your Mobile Number" autoComplete="off" className="ml-12 p-2 rounded" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                      </div>

                      <div className="flex flex-col">
                      <label htmlFor="vehiclename" className="ml-5" style={{ marginLeft: '50px',marginBottom: '5px' }}>Enter Vehicle Name</label>
                      <input type="text" name="text" id="vehiclename" placeholder="Enter your Vehicle Name" autoComplete="off" className="ml-12 p-2 rounded" value={vehiclename} onChange={(e)=>setVehiclename(e.target.value)}/>
                      </div>
                      </article>



                      <article className="md:grid grid-cols-2 gap-10">
                      <div className="flex flex-col">
                      <label htmlFor="vehicleregistrationnumber" className="ml-5" style={{ marginLeft: '50px',marginBottom: '5px' }}>Enter Your Vehicle Registration Number</label>
                      <input type="text" name="text" id="vehicleregistrationnumber" placeholder="Enter your Vehicle Registration Number" autoComplete="off" className="ml-12 p-2 rounded" value={vehicleregistrationnumber} onChange={(e)=>setVehicleregistrationnumber(e.target.value)}/>
                      </div> 
                     
                      <div className="flex flex-col">
                      <label htmlFor="clientname" className="ml-5" style={{ marginLeft: '50px',marginBottom: '5px' }}>Enter Your Client Name</label>
                      <input type="text" name="text" id="clientname" placeholder="Enter your Client Name" autoComplete="off" className="ml-12 p-2 rounded" value={clientname} onChange={(e)=>setClientname(e.target.value)}/>
                      </div>
                      </article>
                      

                      <article className="md:grid grid-cols-2 gap-10 ">
                      <div className="flex flex-col">
                      <label htmlFor="clientaddress" style={{ marginLeft: '50px',marginBottom: '5px' }}>Enter Client Address</label>
                      <input type="text" name="text" id="clientaddress" placeholder="Enter your Client Address" autoComplete="off" className="ml-12 p-2" value={clientaddress} onChange={(e)=>setClientaddress(e.target.value)}/>
                      </div>

                      <div className="flex flex-col">
                      <label htmlFor="invoicenumber" style={{ marginLeft: '50px',marginBottom: '5px' }}>Enter Invoice Number</label>
                      <input type="text" name="text" id="invoicenumber" placeholder="Enter your Invoice Number" autoComplete="off" className="ml-12 p-2" value={invoicenumber} onChange={(e)=>setInvoicenumber(e.target.value)}/>
                      </div>
                      </article>


                      <article className="md:grid grid-cols-2 gap-10 md:mt-5">
                      <div className="flex flex-col">
                      <label htmlFor="invoicedate" style={{ marginLeft: '50px',marginBottom: '5px' }}>Enter Invoice date</label>
                      <input type="date" name="text" id="invoicedate" placeholder="Enter your Invoice date" autoComplete="off" className="ml-12 p-2" value={invoicedate} onChange={(e)=>setInvoicedate(e.target.value)}/>
                      </div>
                      
                      <div className="flex flex-col">
                       <label htmlFor="duedate" style={{ marginLeft: '50px',marginBottom: '5px' }}>Enter Due date</label>
                      <input type="date" name="text" id="duedate" placeholder="Enter your due date" autoComplete="off" className="ml-12 p-2" value={duedate} onChange={(e)=>setDuedate(e.target.value)}/>
                      </div>
                      </article>


                      {/*This is our table form*/}

                      <article>
                        <TableForm description={description} setDescription={setDescription}
                          quantity={quantity} setQuantity={setQuantity}
                          price={price} setPrice={setPrice}
                          amount={amount} setAmount={setAmount}
                          list={list}
                          setList={setList}
                          total={total} setTotal={setTotal}
                        />
                      </article>
                      
                      <label htmlFor="notes" style={{ marginLeft: '50px',marginBottom: '5px' }}>Additional Notes</label>
                      <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Additonal Notes to the client" autoComplete="off" className="ml-12 p-2" value={notes} onChange={(e)=>setNotes(e.target.value)}/>
                     

                      {/* <label htmlFor="vehicleregistrationnumber">Enter Your Vehicle Registration Number</label>
                      <input type="text" name="text" id="vehicleregistrationnumber" placeholder="Enter your Vehicle Registration Number" autoComplete="off" className="ml-12 p-2" value={vehicleregistrationnumber} onChange={(e)=>setVehicleregistrationnumber(e.target.value)}/>
 */}

                      <button  onClick={()=> setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 ml-12 mt-5">Preview Invoice</button>
                      </div>
                </>
              )}
            </main>
         </>

    )
}