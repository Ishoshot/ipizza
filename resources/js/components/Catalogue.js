import React, {
    Component
} from 'react';
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
        return ( <
            div className = "" >
            <
            div className = "row container-fluid p-xl-3 p-lg-3 md:tw-p-10 mt-3 m-0" >
            <
            Pizzas pizzas = {
                this.state.pizzas
            }
            /> <
            /div> <
            /div>
        );
    }
}


export default Catalogue;

if (document.getElementById('catalogue')) {
    ReactDOM.render( < Catalogue / > , document.getElementById('catalogue'));
}
