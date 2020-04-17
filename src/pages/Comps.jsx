import OptionSelector3 from "../components/OptionSelector3";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "reactstrap";

export default function Comps() {
  const [img, setImg] = useState("hello-icon.png");
  const [btnInput, setBtnInput] = useState(0);
  useEffect(() => {
    switch (btnInput) {
      case 1:
        setImg("I-icon.png");
        break;
      case 2:
        setImg("love-icon.png");
        break;
      case 3:
        setImg("logo192.png");
        break;
      default:
        setImg("hello-icon.png");
    }
  }, [btnInput]);
  return (
    <>
      <Row className="pt-4">
        <Col sm="12" md="6" lg="6" className="col-centered">
          <div className="col-centered">
            <OptionSelector3
              btn1_value="I"
              btn2_value="Love"
              btn3_value="React"
              getSelectedOption={(option) => {
                console.log("option", option);
                setBtnInput(option);
              }}
            />
          </div>
        </Col>
      </Row>
      <Row className="pt-4">
        <Col
          sm="12"
          md="6"
          lg="6"
          className="col-centered d-flex justify-content-center"
        >
          <img className="pt-5" src={img} alt="ima" />
        </Col>
      </Row>
    </>
  );
}
