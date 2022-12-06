import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./App.css";
import Apod from "./components/Apod"
import DateForm from "./components/DateForm"
import { useState } from "react";
import moment from "moment";


function App() {
  const tody = moment().format("YYYY-MM-DD");

  const [date,setDate]=useState(tody)
    return (
        <div className="App">

           <div>
           </div>
            <Container>
                 
                <Row>
                    <Col><h1>Space Pic des Tages </h1></Col>
                    <Col></Col>
                </Row>
                <Row>
                  <DateForm date={date} setDate={setDate} />
                </Row>
                <Row>
                      <Apod date={date} />
                </Row>
            </Container>
        </div>
    );
}

export default App;
