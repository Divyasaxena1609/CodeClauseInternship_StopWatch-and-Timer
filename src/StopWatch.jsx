import React, { useEffect, useState } from "react";
import './index.css';

const StopWatch = () => {

    const [sec, SetSec] = useState(0);
    const [run, runTime] = useState(false);
     useEffect( () => {
        let interval;
        if(run){
            interval = setInterval( () => {
                SetSec((Ptime) => Ptime + 10)
            }, 10);
        }else if(!run){
            clearInterval(interval);
        }

        return () =>
            clearInterval(interval);
     }, [run]);

        return(
            <div className="watch">
                <h1 className="sw">STOPWATCH</h1>
                <hr/>
                <hr/>
                <div className="sp">
                     <span>{("0" + Math.floor(sec/60000) % 60).slice(-2)} : </span>
                     <span>{("0" + Math.floor(sec/1000) % 60).slice(-2)} : </span>
                     <span>{("0" + (sec/10) % 100).slice(-2)}</span>
                </div>

                <div>
                     <button className="start" onClick={() => runTime(true)}>Start</button>
                     <button className="stop" onClick={() => runTime(false)}>Stop</button>
                     <button className="reset" onClick={() => SetSec(0)}>Reset</button>
                </div>

            </div>
        )
}

export  default StopWatch;