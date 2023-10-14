

import React from "react";


function Chart() {
  return (
    <div className="circle">
      <div className="circle-1">
        <div className="circle-2">
          
        </div>
      </div>
      <div className="points">

          <h3><span className="square-1"></span> consignment booked</h3>
        <h3><span className="square-2"></span> In Transit</h3>
                 <h3><span className="square-3"></span> Out for Delivery</h3>
        <h3><span className="square-4"></span> Delivered successful</h3>
       </div>

       <div className="circled">
         <div className="circle-3">
           <div className="circle-4"></div>
         </div>
         <div className="points">
           <h3><span className="square-1"></span> consignment booked</h3>
           <h3><span className="square-2"></span> In Transit</h3>
          <h3><span className="square-3"></span> Out for Delivery</h3>
           <h3><span className="square-4"></span> Delivered successful</h3>
         </div>
       </div>
     </div>
   );
 }

 export default Chart;




