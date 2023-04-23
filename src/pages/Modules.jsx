import React from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import Dropdown from "../components/Dropdown";
import Modulesitems from '../components/Modulesitems';
import "../css/Homepage.css";
import "../css/Modules.css";

export default function Modules(){
  return (
    <div>
      <Header/>
      <Dropdown/>
      <div className="content">
        <Nav/>
        <Modulesitems/>
      </div>
    </div>
  )
};