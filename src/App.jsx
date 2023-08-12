import React from "react";
import StopWatch from "./StopWatch";
import Timer from "./Timer";
import './index.css';


const App = () => {
    return(
        <div className="Wrapper">
            <StopWatch/>
            <Timer/>
        </div>
    )
}

export default App;