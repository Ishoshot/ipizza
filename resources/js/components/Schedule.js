import React, { Component } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import ReactDOM from 'react-dom';


class Schedule extends Component{
    render(){ 
        return (
        	<div>
            <div className="container-fluid p-xl-5 p-lg-2">

		        <div className="row p-xl-5 p-lg-2 justify-content-center">
		            <div className="col-md-4 mt-5">
		            	<Card className="rounded-0 text-center p-xl-4 p-lg-2 border-0" style={shadow}>
						  <Card.Body>
						    <i style={EachSchedule} className="fa fa-cog rounded-circle fa-2x"></i>
						    <Card.Title className="mt-4"><b>Services</b></Card.Title>
						    <div className="text-justify">
						    	<ListGroup variant="flush">
								  <ListGroup.Item>Pick-up</ListGroup.Item>
								  <ListGroup.Item>Dine-in</ListGroup.Item>
								  <ListGroup.Item>Table Booking</ListGroup.Item>
								  <ListGroup.Item>Delivery</ListGroup.Item>
								</ListGroup>
						    </div>
						  </Card.Body>
						</Card>
		            </div>


		            <div className="col-md-4 mt-5">
		            	<Card className="rounded-0 text-center border-0 p-xl-4 p-lg-2" style={shadow}>
						  <Card.Body>
						    <i style={EachSchedule} className="fa fa-clock-o rounded-circle fa-2x"></i>
						    <Card.Title className="mt-4"><b>Opening Hours</b></Card.Title>
						    <div className="text-justify">
						    	<ListGroup variant="flush">
							    	<section className="border-bottom">
									  <ListGroup.Item className="d-inline-block">Mon-Thur</ListGroup.Item>
									  <span className="d-inline-block text-right">9:00 am - 6:00 pm</span>
									</section>
									
									<section className="border-bottom">
									  <ListGroup.Item className="d-inline-block">Fridays</ListGroup.Item>
									  <span className="d-inline-block text-right">9:00 am - 5:00 pm</span>
									</section>
									
									<section className="border-bottom">
									  <ListGroup.Item className="d-inline-block">Saturdays</ListGroup.Item>
									  <span className="d-inline-block">10:00 am - 4:00 pm</span>
									</section>

									<section className="border-bottom">
									  <ListGroup.Item className="d-inline-block">Sundays</ListGroup.Item>
									  <span className="d-inline-block">11:00 am - 4:00 pm</span>
									</section> 
								</ListGroup>
						    </div>
						  </Card.Body>
						</Card>
		            </div>


		            <div className="col-md-4 mt-5">
		            	<Card className="rounded-0 text-center p-xl-4 p-lg-2 border-0" style={shadow}>
						  <Card.Body>
						    <i style={EachSchedule} className="fa fa-map-marker rounded-circle fa-2x"></i>
						    <Card.Title className="mt-4"><b>Location</b></Card.Title>
						    <div className="text-justify">
						    	<ListGroup variant="flush">
								  <ListGroup.Item>391, Alli close, Gbagada, Lagos.</ListGroup.Item>
								  <ListGroup.Item>
								  	<i className="fa fa-phone"></i> +244 810 557 5363
								  </ListGroup.Item>
								  <ListGroup.Item>
								  	<i className="fa fa-envelope-o"></i> ishoshot@gmail.com
								  </ListGroup.Item>
								  <ListGroup.Item>
								  	<i className="fa fa-instagram"></i> ishola.oluwatobi
								  </ListGroup.Item>
								</ListGroup>
						    </div>
						  </Card.Body>
						</Card>
		            </div>
		        </div>

    		</div>
    		</div>
        );
    }
}

export default Schedule;

const EachSchedule = {
	padding: '15px',
	backgroundColor: '#db3a3a',
	color: '#fff',
	width: '60px',
	height: '60px',
}

const shadow = {
    boxShadow: '2px 3px 10px -6px #000',
}


if (document.getElementById('schedule')) {
    ReactDOM.render(<Schedule />, document.getElementById('schedule'));
}
