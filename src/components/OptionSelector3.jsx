import React, { useState, useEffect } from "react";
import { ButtonGroup, Button } from "reactstrap";

function OptionSelector3(props) {
  const [option, setOption] = useState(0);
  useEffect(() => {
    props.getSelectedOption(option);
  }, [option]);
  const [I_color, love_color, react_color] = ["#bd3dbc", "#f44337", "#61dbfb"];

  return (
    <div className="shadow-lg mx-3">
      <ButtonGroup style={{ width: "100%" }}>
        <Button
          style={{ background: option === 1 ? I_color : "" }}
          size="lg"
          onClick={() => {
            setOption(1);
          }}
        >
          {props.btn1_value}
        </Button>
        <Button
          style={{ background: option === 2 ? love_color : "" }}
          size="lg"
          onClick={() => {
            setOption(2);
          }}
        >
          {props.btn2_value}
        </Button>
        <Button
          style={{ background: option === 3 ? react_color : "" }}
          size="lg"
          onClick={() => {
            setOption(3);
          }}
        >
          {props.btn3_value}
        </Button>
      </ButtonGroup>
    </div>
  );
}
export default OptionSelector3;
