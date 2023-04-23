import React from 'react';
import "../css/Quiz.css";
import calender from "../Icons/calendar.svg";
import clock from "../Icons/clock-blue.svg";
export default function QuizModule(){
  return (
    <div>
        <div className="quizcontainer">
          <div className="quiztitle">
            <p id='heading'>Quiz-1: Data Types</p>
            <p>16 December 2023</p>
          </div>
        </div>
        <p id='assignment-details'>Quiz Details</p>
        <div className="details-container">
          <div>
            <p id='bold-title'>10</p>
            <p>Questions</p>
          </div>
          <div>
            <p id='bold-title' style={{textAlign : "center"}}>_</p>
            <p>Duration</p>
          </div>
          <div>
            <p id='bold-title'>125</p>
            <p>Total Score</p>
          </div>
          <div id="border"></div>
          <div>
            <p>Start:</p>
            <div id='date-timing'>
              <img src={calender}/>
              <p>16 December 2023</p>
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
                <p>19 December 2023</p>
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