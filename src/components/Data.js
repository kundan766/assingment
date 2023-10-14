import React from "react";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import HouseIcon from '@mui/icons-material/House';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function Data (){
    return (
     <div className="data">
        <div className="flow" style={{display:"flex",marginLeft:"300px",marginTop:"70px",gap:"150px",backgroundColor:"skyblue",width:"370px"}}>
          <ZoomInIcon/>
          <HouseIcon/>
          <ShoppingCartCheckoutIcon/>
           <CheckBoxIcon/>
        </div>

       <button className="button" style={{borderRadius:"2%",width:"350px",height:"40px"}}>Docket No-L123456789</button>
       <div className="odata">
       <div className="data-1">
        <h3>Consignor</h3>
        <h2>RAW PRESSERY PRIVATE LIMITED</h2>
        <p>Y-26 OKHLA INDUSTRIAL AREA PHASE-||,OKHLA,</p>
        <p>New Delhi,South East Delhi,Delhi, 110020</p>
       </div>
       <div className="line"></div>
       <div className="data-2">
        <h3>Consignor</h3>
        <h2>Balarema Agencies-Kerala Distributor-</h2>
        <p>Y-26 OKHLA INDUSTRIAL AREA PHASE-||,OKHLA,</p>
        <p>New Delhi,South East Delhi,Delhi, 110020</p>
       </div>

       <div className="line"></div>

       <div className="data-3">
        <h3>Shipment Booked Date</h3>
        
        <p>2023-09-0IT14.55.05.000Z</p>
       
       </div>
       </div>
       <div className="Date" style={{marginTop:"30px",marginLeft:"20px"}}>

                 <div className="date" style={{backgroundColor: "lightgrey",margin:"0px",padding:"0px" ,width:"900px",heigth:"60px"}} >
                  <h4>Date/Time</h4>
                  <h4>Location</h4>
                  <h4>Status</h4>
                 </div>
                 <div className="info">
                 <p>2023-09-09T19:24:01.0002</p>
                 <p>BLR</p>
                 <p>Delivered Successful</p>
                 
               </div>

               <div className="info">
                 <p>2023-09-09T18:57:09.0002</p>
                 <p>BLR</p>
                 <p>Bracnch Out Carting</p>
                 
               </div>
               <div className="info">
                 <p>2023-09-09T18:57:01.0002</p>
                 <p>BLR</p>
                 <p>Picked up</p>
                 
               </div>
               <div className="info">
                 <p>2023-09-09T14:55:05.0002</p>
                 <p>BLR</p>
                 <p>Consignment Booked</p>
                 
               </div>
               
                </div>

                <button className="btn">DOWNLOAD POD</button>
       </div>

   
    
    )
}
export default Data;