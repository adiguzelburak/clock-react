import React, { useState } from "react";
import "./App.css";
import "./design.css";
import Navbar from "./Navbar";
import { Switch } from "antd";
import Toggle from "./Toggle";
import Clock from "./Clock"
import ClockWithDate from "./ClockWithDate";


const App = () => {
  const [toggle,setToggle ] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false): setToggle(true);
  }
  
  return (
    <div className="App">
      <Navbar/>
      <div id="toggle">
      <Switch onClick={toggler} />
      <i class="far fa-calendar-alt fa-2x" id="calendar"></i>
      <Toggle/>
      </div>
      {toggle ? <Clock/> : <ClockWithDate/>}
      {/* <Clock /> */}
    </div>
  );
};

export default App;
