import React from "react";
import { useState } from "react";
import Calender from "./Calender";
import "./CheckDate.css";

function CheckDate() {
  const [button, setButton] = useState(true);

  const trueOrFalse = () => {
    setButton(!button);
  };
  return (
    <div className="checkdate_container">
      <div className="checkdate">
        <div className="checkdate_header_container">
          <div className="checkdate_header">
            <span
              onClick={trueOrFalse}
              className={
                button === true ? "checkdate_button_T" : "checkdate_button_F"
              }
            >
              달력
            </span>
            <span
              onClick={trueOrFalse}
              className={
                button === false ? "checkdate_button_T" : "checkdate_button_F"
              }
            >
              유연한 일정
            </span>
          </div>
        </div>

        <Calender />
      </div>
    </div>
  );
}

export default CheckDate;
