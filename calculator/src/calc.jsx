import React from "react";
import Numbers from "./numbers"
import Operators from "./Operators";
function Calc(){
    return(
        <div className="Calc">
      <div className="Screen">
        <input type="text" id="myscreen"></input>
      </div>
      <div className="buttons">
        <div className="NumPad">
          <Numbers val="1"/>
          <Numbers val="2"/>
          <Numbers val="3"/>
          <Operators val="X"/><br/>
          <Numbers val="4"/>
          <Numbers val="5"/>
          <Numbers val="6"/>
          <Operators val="/"/><br/>
          <Numbers val="7"/>
          <Numbers val="8"/>
          <Numbers val="9"/>
          <Operators val="+"/><br/>
          <Numbers val="."/>
          <Numbers val="0"/>
          <Operators val="="/>
          <Operators val="-"/>
        </div>
      </div>
    </div>
    );
}
export default Calc;