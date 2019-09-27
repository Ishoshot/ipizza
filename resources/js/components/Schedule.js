import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';


class Schedule extends Component{
    render(){ 
        return (
            <div className="container-fluid mt-5">

		        <div className="row justify-content-center">
		            <div className="col-md-4">
		            	<Card className="rounded-0 text-center p-4">
						  <Card.Body>
						    <i style={EachSchedule} className="fa fa-cog rounded-circle fa-2x"></i>
						    <Card.Title className="mt-4"><b>Services</b></Card.Title>
						    <Card.Text className="text-justify">
						    	Text here
						    </Card.Text>
						  </Card.Body>
						</Card>
		            </div>
		        </div>

    		</div>
        );
    }
}

export default Schedule;

const EachSchedule = {
	padding: '4%',
	backgroundColor: '#db3a3a',
	color: '#fff'
}


if (document.getElementById('schedule')) {
    ReactDOM.render(<Schedule />, document.getElementById('schedule'));
}
