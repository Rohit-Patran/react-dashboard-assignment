import React from 'react'
import Header from '../components/Header';
import Dropdown from '../components/Dropdown';
import Nav from '../components/Nav';
import "../css/Instructor.css";
export default function Instructor()
{
  return (
    <div>
        <Header/>
        <Dropdown/>
        <div className="content">
          <Nav/>
            <div className="instructor-content">
              <h2>Instructor</h2>
              <h4>David Johnson</h4>

              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus atque, ab corrupti labore molestiae ullam dicta praesentium mollitia nesciunt neque est odio blanditiis aut architecto magnam tempora aspernatur? Dolorum, eos.</p>
            </div>
        </div>
    </div>
  )
};