import React, { Component } from 'react';
import { Card, Button, ButtonToolbar } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import OrderModal from './OrderModal';


class Pizza extends Component{
	state = {
		loading: false,
    	orderModalShow: false,
    	orderItem:{},
  	}

  	placeOrder =() => {
    	this.setState({loading: true});
    	setTimeout(()=>{
    		this.setState({orderItem: this.props.pizza});	
    		this.setState({orderModalShow:true});
    		this.setState({loading: false});
    	}, 1000)
    }

    render(){ 
    let orderModalClose =() => this.setState({orderModalShow: false});
   	const {loading} = this.state;
        return (
            <div className="col-md-3 p-2 mt-3">
				<Card className="tw-bg-gray-100" height="100">
				  <Card.Img variant="top" src={`http://s3-eu-west-2.amazonaws.com/ipizza/${this.props.pizza.image}`} />
				  <Card.Body>
				    <span className="float-right tag"> € { this.props.pizza.amount }</span>
				    <Card.Title className="font-weight-bold text-uppercase">{ this.props.pizza.name }</Card.Title>
				    <span className="font-weight-bold"><i>{ this.props.pizza.catName }</i></span>
				    <Card.Text className="text-justify">{ this.props.pizza.description }</Card.Text>
				    <ButtonToolbar>
				      <Button variant="secondary" className="btn-sm" onClick={this.placeOrder}
				      disabled={loading}>
				      	{loading && <span>Processing <i className="fa fa-refresh fa-spin"></i></span>}
				        {!loading && <span> Order now <i className="fa fa-arrow-right"></i></span>}
				      </Button>

				      <OrderModal
				        show={this.state.orderModalShow}
				        onHide={() => this.setState({orderModalShow: false})}
				        order={this.state.orderItem}
				      />
			    	</ButtonToolbar>
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
