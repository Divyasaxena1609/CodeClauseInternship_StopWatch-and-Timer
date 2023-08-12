import React, { useEffect, useState } from "react";
import Input from "./Input";
import './index.css';

const Timer = () =>{
  
    const[hour, setHour] = useState(0);
    const[Min, setMin] = useState(0);
    const[sec, setsec] = useState(0);
    const[MilSec, setMilSec] = useState(0);
    const[run, setRun] = useState(null);

    const [showEndScreen, setShowEndScreen] = useState({
        show: false,
        message: "Set New Time",
      });
    

    useEffect( () => {
        let interval;
        if(run){
            interval = setInterval( () => {
                if(MilSec > 0){
                      setMilSec((MilSec) => MilSec - 1);
                }else if (sec > 0) {
                      setsec((sec) => sec - 1);
                      setMilSec(99);
                }else if (Min > 0) {
                    setMin((Min) => Min - 1);
                    setsec(59);
                    setMilSec(99);
                }else if (hour > 0) {
                    setHour((hour) => hour - 1);
                    setMin(59);
                    setsec(59);
                    setMilSec(99);
              }
            }, 10);
        }

         if(hour === 0 && Min === 0 && sec === 0 && MilSec === 1){
            setShowEndScreen({ ...showEndScreen, show: true });
            Reset();
        }

        return () =>
            clearInterval(interval);
     }, [MilSec, sec, Min, hour, run, showEndScreen]);


     // Start Timer

     const start = () => {
        if (hour !== 0 || Min !== 0 || sec !== 0 || MilSec !== 0) {
            setRun(true);
            setShowEndScreen({ ...showEndScreen, show: false });
        } else {
            alert("Set Time")
        }
     }

     //Pause

     const pause = () =>{
        setRun(false);
     }

     //Stop

     const stopTimer = () =>{
        Reset();
        setShowEndScreen({ ...showEndScreen, show: false });
    }

     // Reset
    
     const Reset = () => {
        setRun(false);
        setMilSec(0);
        setsec(0);
        setMin(0);
        setHour(0);
     }
     
     const changesec = (e) =>{
        setsec(e.target.value);
     }

     const changeMin = (e) =>{
        setMin(e.target.value);
     }

     const changeHour = (e) =>{
        setHour(e.target.value);
     }

    return(
        <div className="Timer">

            <h1 className="heading">TIMER</h1>
             <hr/>
             <hr/>
            {showEndScreen.show && (
                 <h1 className="End">{showEndScreen.message}</h1>
                )
            }

            <Input
                MilSec = {MilSec}
                sec = {sec}
                Min = {Min}
                hour = {hour}
                changesec = {changesec}
                changeMin = {changeMin}
                changeHour = {changeHour}
            />

            <br/>

            {!run && (<button className="Tstart" onClick={start}>Start</button>)}
            {run && (<button className="Tpause" onClick={pause}>Pause</button>)} {" "}
             <button className="Tstop" onClick={stopTimer}>Reset</button>

        </div>
    )

}

export default Timer;