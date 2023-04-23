import React from 'react';
import "../css/Modules.css";
import "../css/Topic.css";
import info from "../Icons/information-circle-1.svg";
import play from "../Icons/topic.svg";
import videorecorder from "../Icons/videocam.svg";
import file from "../Icons/document.svg";
export default function TopicModule()
{
  return (
    <div className='topic'>
        <div className="heading">
            <h1>Python Loops</h1>
            <p>15 December 2023 , Wednesday, 07:30 PM</p>
        </div>
        <p id='feedback'>DAILY FEEDBACK</p>
        <div className="topic-content">
            <div className="topic-headings">
                <span id='session'>
                    <img src={info}/>
                    <span>SESSION PLAN</span>
                </span>
                <span>
                    <img src={play}/>
                    <span>PRE-WATCH VIDEOS</span>
                </span>
                <span>
                    <img src={videorecorder}/>
                    <span>SESSION RECORDINGS</span>
                </span>
                <span>
                    <img src={file} width={20}/>
                    <span>REFERENCES</span>
                </span>
            </div>
            <div className="topic-content-details">
                <h2>Session Plan</h2>
                <p>LIVE session is about to start. Please stay tuned.</p>
                <span id='join-live'>JOIN LIVE SESSION</span>
                <h3>Sub-Topics</h3>
                <div className='bullets'>
                    1. Sorting and Indexing Dataframe.<br/>
                    2. Filtering Dataframe.<br/>
                    3. Usage of loc and iloc functions.
                </div>
                <br/>
                <span style={{fontWeight : "500"}}>Session Details</span>
            </div>
        </div>
    </div>
  )
}