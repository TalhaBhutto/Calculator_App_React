import React from "react";
import Numbers from "./numbers"
function Calc(){
    return(
        <div className="Calc">
      <div className="Screen">

      </div>
      <div className="buttons">
        <div className="NumPad">
          <Numbers val="1"/>
          <Numbers val="2"/>
          <Numbers val="3"/>
          <Numbers val="4"/>
          <Numbers val="5"/>
          <Numbers val="6"/>
          <Numbers val="7"/>
          <Numbers val="8"/>
          <Numbers val="9"/>
          <Numbers val="."/>
          <Numbers val="0"/>
          <Numbers val="="/>
        </div>
        <div className="Operators">

        </div>
      </div>
    </div>
    );
}
export default Calc;