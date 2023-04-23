import React from 'react';
import "../css/Assignment.css";
import calender from "../Icons/calendar.svg";
import clock from "../Icons/clock-blue.svg";
export default function AssignmentModule(){
  return (
    <div>
        <div className="container">
          <div className="title">
            <p id='heading'>Assignment-1: Operators Loops</p>
            <p>20 December 2023</p>
          </div>
          <div className="title">
            <p id='left'>3</p>
            <p>Problems</p>
          </div>
          <div className="title">
            <p id='left'>100</p>
            <p>Total Score</p>
          </div>
        </div>
        <p id='assignment-details'>Assignment Details</p>
        <div className="details-container">
          <div>
            <p id='bold-title'>3</p>
            <p>Problems</p>
          </div>
          <div>
            <p id='bold-title'>100</p>
            <p>Score</p>
          </div>
          <div id="border"></div>
          <div>
            <p>Start:</p>
            <div id='date-timing'>
              <img src={calender}/>
              <p>20 December 2023</p>
            </div>
            <div id='date-timing'>
              <img src={clock}/>
              <p>07:30 PM</p>
            </div>
          </div>
          <div>
            <p>Due:</p>
              <div id='date-timing'>
                <img src={calender}/>
                <p>26 December 2023</p>
              </div>
            <div id='date-timing'>
              <img src={clock}/>
              <p>11:59 PM</p>
            </div>
          </div>
        </div>
    </div>
  )
}