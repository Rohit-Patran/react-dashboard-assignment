import { useState } from "react";
import "../css/Dropdown.css";
export default function Dropdown()
{
    let [value , setValue] = useState('select program');
    let [visible , setVisible] = useState(false);
    return(
        <div className="dropdown-section">
                <div className="dropdown-button">
                    <button onClick={() => setVisible(!visible)}>{value}  &#9660;</button>
                    <h3>{value === "select program" ? "Data Scientist Program" : value}</h3>
                </div>
                {visible ? <div className="dropdown-content">
                <h5 style={{paddingLeft : "1vw" , fontSize : "1.1vw"}}>
                    select Program
                </h5> 
                <span>
                    <button value={"ECRD"} onClick={(e) => setValue(e.target.value)}>ECRD</button>
                    <button value={"FSR222222"} onClick={(e) => setValue(e.target.value)}>FSR222222</button>
                    <button value={"DS261121"} onClick={(e) => setValue(e.target.value)}>DS261121</button>
                    <button value={"DS031221"} onClick={(e) => setValue(e.target.value)}>DS031221</button>
                </span>
            </div> : ""}
        </div>
    )
}