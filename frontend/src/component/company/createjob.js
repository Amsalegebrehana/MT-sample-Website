import React from 'react'
import {Form,Button } from "react-bootstrap";
function Createjob() {
    return (
        <div>
         <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="company Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="company Name" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="company Name" />
                </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="company Name" />
  </Form.Group>              
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}

export default Createjob;
