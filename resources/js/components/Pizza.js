import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';




class Pizza extends Component{
    render(){ 
        return (
            <div className="col-md-3 p-2 mt-3">
				<Card className="tw-bg-gray-100">
				  <Card.Img variant="top" src={`/storage/${this.props.pizza.image}`} />
				  <Card.Body>
				    <span className="float-right tag">$ { this.props.pizza.amount }</span>
				    <Card.Title className="font-weight-bold text-uppercase">{ this.props.pizza.name }</Card.Title>
				    <Card.Title>{ this.props.pizza.category_id }</Card.Title>
				    <Card.Text className="text-justify">{ this.props.pizza.description }</Card.Text>
				  </Card.Body>
				</Card>
            </div>
        );
    }
}



//propTypes
Pizza.propTypes = {
	pizza: PropTypes.object.isRequired
}


export default Pizza;

// if (document.getElementById('pizza')) {
//     ReactDOM.render(<Pizza />, document.getElementById('pizza'));
// }
