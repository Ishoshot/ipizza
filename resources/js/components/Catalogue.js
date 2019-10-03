import React, {
    Component
} from 'react';
import { Alert } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Pizzas from './Pizzas';


class Catalogue extends Component {
    state = {
        pizzas: []
    }

    componentDidMount() {
        axios.get('/api/pizzas')
            .then(res => this.setState({
                pizzas: res.data.data
            }));
    }

    render() { 
    
        if (this.state.pizzas.length > 0) {
            return ( 
                <div className="row container-fluid p-xl-3 p-lg-3 md:tw-p-10 mt-3 m-0" >
                    <Pizzas pizzas = {
                        this.state.pizzas
                    }
                    /> 
                </div>
            );
        }
        else{
            return (
                <div className="container-fluid p-0 mt-5">
                    <Alert variant="danger" className="rounded-0 mb-0">
                        <h5 className="m-0">
                            <marquee>
                                Oops! We are currently out of stock! Please contact our customer care @ 08105575363 for more info.
                            </marquee>
                        </h5>
                    </Alert>
                </div>
            );
        }
    
    }
}


export default Catalogue;

if (document.getElementById('catalogue')) {
    ReactDOM.render( < Catalogue / > , document.getElementById('catalogue'));
}
