import { useState } from "react";
import React from 'react';
import { BiCopyAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import "../css/history.css";

  export const History = () =>{
    let [series, setSeries] = useState([]);


    const handleSeries = (event) =>{
      event.preventDefault();
      let allNumbers1 = JSON.parse(localStorage.getItem('allNumbers'));
      setSeries(allNumbers1);
      
      console.log(series)
    }

    const handleDelete = (event, key) =>{
      let allNumbers1 = JSON.parse(localStorage.getItem('allNumbers'));
      localStorage. removeItem(key);
      allNumbers1.splice(key, 1);
      setSeries(allNumbers1);
      localStorage.setItem('allNumbers', JSON.stringify(allNumbers1));
      console.log("HEllo", key);
    }

    return(
      <div style={{top: "-1rem", position:"relative"}}>
        
        {JSON.parse(localStorage.getItem('allNumbers'))?(
          <div style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "flex-end"
            }}>
            <button onClick={(e) => {handleSeries(e); e.target.style.display = 'none';}} className="show_history">View History</button>
            
            {series.map((key, obj) =>{
              //let type = typeof(key);
              let data = JSON.parse(localStorage.getItem(key));

              return(
                <span className="span_copy" key={obj}>
                <span>{key}</span>
                <span><button onClick={() => { navigator.clipboard.writeText(data['odd']) }}><BiCopyAlt /> Odd Series</button></span>
                <span><button onClick={() => { navigator.clipboard.writeText(data['even']) }}><BiCopyAlt /> Even Series</button></span>
                <span><button onClick={(e)=> handleDelete(e, {key})}><AiOutlineDelete /></button></span>
                </span>                  
              )
   } )}
            </div>
        ):(
          <div>
            <h6>No History Found!!</h6>
          </div>
        )
        }
      </div>
    )
  }
  
  
 
