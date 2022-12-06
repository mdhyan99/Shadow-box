import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
// import moment from "moment";

export default function DateForm({date,setDate}) {
    // const tody = moment().format("YYY-MM-DD");
    const [formValue, setFormValue] = useState(date);
    const handleChange = (event) =>{
        setFormValue(event.target.value)
    }   
    const clickHandler = (event) => {
        setDate(formValue)
    }
     return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="dateInput">
                    <Form.Label>Wunschdatum</Form.Label>
                    <InputGroup>
                        <Form.Control type="date" value={date} onChange={handleChange} />
                        <Button variant="outline-secondary" id="button-addon" onClick={clickHandler}>
                            Senden
                        </Button>
                    </InputGroup>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group> */}
            </Form>
        </div>
    );
}
