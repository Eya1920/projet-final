import React from 'react';
import {Form, Button} from 'react-bootstrap';
const Contact = () => {
    return (
        <div className='conta'>
           
           <h1> Notre adresse </h1>
           <iframe src="https://goo.gl/maps/zR5ch6LarpoBz4WN9"  width="1300" height="450"sandbox=''/>
           <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Telephone Number</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
       
    );
}

export default Contact;
