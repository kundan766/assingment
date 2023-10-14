import React from "react";
import GridViewIcon from '@mui/icons-material/GridView';


function Table() {
  return (
    <div className="table">
      <div className="heading" style={{backgroundColor: "lightblue",margin:"0px",padding:"0px" }}>
        <h4>Docket No</h4>
        <h4>From</h4>
        <h4>To</h4>
        <h4>Status</h4>
        <h4>Actions</h4>
        
         </div>
       
       <div className="header-1"> 
        <h6>L123456789</h6>
        <h6>BLR</h6>
        <h6>KER</h6>
        <button className="button-0">Consignment Booked</button>
        
         <h3><GridViewIcon/></h3>
        
       </div>
       <div className="header-1" style={{backgroundColor: "lightgrey",margin:"0px",padding:"0px" }}> 
        <h6>L123456789</h6>
        <h6>BLR</h6>
        <h6>KER</h6>
        <button className="button-1">Consignment Booked</button>
        <h3><GridViewIcon/></h3>
        
       </div>
       <div className="header-1"> 
        <h6>L123456789</h6>
        <h6>BLR</h6>
        <h6>KER</h6>
        <button className="button-2">In Transit</button>
        <h3 className="grid"><GridViewIcon/></h3>
        
       </div>

       <div className="header-1" style={{backgroundColor: "lightgrey",margin:"0px",padding:"0px" }}> 
        <h6>L123456789</h6>
        <h6>BLR</h6>
        <h6>KER</h6>
        <button className="button-3">Out For Delivery</button>
        <h3 className="grid-1"><GridViewIcon/></h3>
        
       </div>

       <div className="header-1"> 
        <h6>L123456789</h6>
        <h6>BLR</h6>
        <h6>KER</h6>
        <button className="button-4">Delivered Successful</button>
        <GridViewIcon/>
        
       </div>


       <div className="table-1">
       <div className="heading" style={{backgroundColor: "lightblue",margin:"0px",padding:"0px" }}>
        <h4>Docket No</h4>
        <h4>From</h4>
        <h4>To</h4>
        <h4>Status</h4>
        <h4>Actions</h4>
        
         </div>
        
       
       <div className="header-1" style={{backgroundColor: "whitesmoke",margin:"0px",padding:"0px" }}> 
        <h6>L123456789</h6>
        <h6>BLR</h6>
        <h6>KER</h6>
        <button className="button-0">Consignment Booked</button>
        <h3><GridViewIcon/></h3>
        
       </div>
       <div className="header-1" style={{backgroundColor: "lightgrey",margin:"0px",padding:"0px" }}> 
        <h6>L123456789</h6>
        <h6>BLR</h6>
        <h6>KER</h6>
        <button className="button-1">Consignment Booked</button>
        <h3><GridViewIcon/></h3>
        
       </div>
       <div className="header-1" style={{backgroundColor: "whitesmoke",margin:"0px",padding:"0px" }}> 
        <h6>L123456789</h6>
        <h6>BLR</h6>
        <h6>KER</h6>
        <button className="button-2">In Transit</button>
        <h3 className="grid"><GridViewIcon/></h3>
        
       </div>

       <div className="header-1" style={{backgroundColor: "lightgrey",margin:"0px",padding:"0px" }}> 
        <h6>L123456789</h6>
        <h6>BLR</h6>
        <h6>KER</h6>
        <button className="button-3">Out For Delivery</button>
        <h3 className="grid-1"><GridViewIcon/></h3>
        
       </div>

       <div className="header-1" style={{backgroundColor: "whitesmoke",margin:"0px",padding:"0px" }}> 
        <h6>L123456789</h6>
        <h6>BLR</h6>
        <h6>KER</h6>
        <button className="button-4">Delivered Successful</button>
        <h3><GridViewIcon/></h3>
        
       </div>

      </div>
         
    </div>
  );
}

export default Table;


