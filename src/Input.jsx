import React from "react";
import './index.css';

export default function Input({
    MilSec,
    sec,
    Min,
    hour,
    changesec,
    changeMin,
    changeHour,
  }) {

 return(
    <div className="Inp">
       <div>
         <label>hh</label><br/>
         <input value={hour} onChange={changeHour}/>
       </div> {" "}

       <div>
         <label>mm</label><br/>
         <input value={Min} onChange={changeMin}/>
       </div> {" "}

       <div>
         <label>ss</label><br/>
         <input value={sec} onChange={changesec}/>
       </div> {" "}

       <div>
         <label>ms</label><br/>
         <input value={MilSec}/>
       </div> 

    </div>
 )


}