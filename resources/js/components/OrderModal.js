import React, { Component } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import ReactDOM from 'react-dom';


class OrderModal extends Component{
    constructor(props){
      super(props);
    }

    state = {
      quantity: 1,
      quantityMessage:'',
      totalAmount: 0,
    }


    IncrementQuan =() => {
      this.setState({quantity: this.state.quantity + 1});
      this.setState({quantityMessage: ''});
      this.setState({totalAmount: (this.state.quantity + 1) * this.props.order.amount});
    }

    Decrement =() =>{
      this.setState({quantity: this.state.quantity - 1})
      this.setState({totalAmount: (this.state.quantity - 1)* this.props.order.amount});
    }

    DecrementQuan =() => {
      (this.state.quantity === 1) ? this.setState({quantityMessage: 'Cannot buy Zero [0] item.'}) : 
      this.Decrement();
    }

    onToken = (token) => {
      console.log(token);
      JSON.stringify(token);
      alert(`Payment Sucessful`);
    }

    render(){
      const {checkout} = this.state; 
        return (
          <div>
              <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>

                <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                    <span className="font-weight-bold" style={fVariant}>
                      Continue to place order...
                    </span>
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  
                  <div className="row container-fluid">
                    
                      <div className="col-md-9">
                          <p><b>Item Name:</b> {this.props.order.name} </p>
                          <p><b>Item Description:</b> {this.props.order.description} </p>
                          <p><b>Item Price/Quantity:</b> € {this.props.order.amount} </p>
                          <p><b>Total Price:</b> € {this.state.totalAmount} </p> 
                      </div>

                      <div className="col-md-3">
                          <Card.Img variant="top" src={`/storage/${this.props.order.image}`} />
                          <p className="mt-2"><b>Quantity:</b> {this.state.quantity} <br/>
                            <button className="btn btn-sm btn-outline-success"
                            onClick={this.IncrementQuan}> + </button> <button className="btn btn-sm btn-outline-danger"
                            onClick={this.DecrementQuan}> - </button> <br/>
                            <span className="text-danger" style={quantityMessage}>{this.state.quantityMessage}</span>
                          </p>
                      </div>

                  </div>
                  
                  <StripeCheckout
                  token={this.onToken}
                  stripeKey="pk_test_LX2A9kg6xsI0vU3MLL9Mm9od00d7ggCmus"
                  name="iPizza"
                  description="Pizza Ordering Simplified" 
                  image="/media/logo.png"
                  panelLabel="Finalize Payment"
                  amount={this.state.totalAmount * 100}
                  currency="EUR"
                  locale="en"
                  shippingAddress={true}
                  billingAddress={true}>

                  <button className="btn btn-secondary btn-sm">
                  Complete Order <i className="fa fa-download"></i> 
                  </button>

                  </StripeCheckout>  
               
                </Modal.Body>
                
                <Modal.Footer>
                  <Button variant="danger" className="btn-sm" onClick={this.props.onHide}>
                  <i className="fa fa-close"></i> Cancel order
                  </Button>
                </Modal.Footer>
              
              </Modal>
          </div>
        );
    }
}



export default OrderModal;


const fVariant = {
  fontVariant:'small-caps',
  color: 'red',
}

const quantityMessage = {
  fontSize: '12px',
}