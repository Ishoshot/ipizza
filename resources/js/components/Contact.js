import React, { Component } from 'react';
import { Form, InputGroup, Col, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';


class Contact extends Component{
    render(){ 
        return (
            <div className="container-fluid mt-5">

		        <div className="row justify-content-center">
		            <div className="col-md-7">
		            	<h1 className="text-center font-weight-bold mb-4">Contact Us</h1>
		            	<Form style={FormBg}>
							
							<Form.Row>
								<Col md={6}>
								    <Form.Group>
								      <Form.Control className="p-4 rounded-0" type="text" placeholder="Enter Full Name" />
								    </Form.Group>
								</Col>
							    
								<Col md={6}>
								    <Form.Group>
								      <Form.Control className="p-4 rounded-0" type="text" placeholder="Enter Phone Number" />
								    </Form.Group>
								</Col>

							</Form.Row>
							
							<Form.Group>
							    <Form.Control className="p-4 rounded-0" type="email" placeholder="Enter Email" />
							</Form.Group>

							<Form.Group>
							    <Form.Control as="textarea" rows="5" className="p-4 rounded-0" placeholder="Tell it to us here.." />
							</Form.Group>

							<Button style={MessageBg} type="submit">
								<i className="fa fa-paper-plane"></i> Send Message
							</Button>
						</Form>
		            </div>
		        </div>

    		</div>
        );
    }
}

export default Contact;

const FormBg = {
	backgroundColor:'#fff',
	padding:'7%',
	textAlign: 'center'
}

const MessageBg = {
	backgroundColor:'#db3a3a',
	border: 'none',
	marginTop: '10px'
}

if (document.getElementById('contact')) {
    ReactDOM.render(<Contact />, document.getElementById('contact'));
}
