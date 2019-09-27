import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Pizza from './Pizza';

class Pizzas extends Component{
    render(){ 
        return this.props.pizzas.map((pizza) => (
            // <div className="row">
            	<Pizza pizza={ pizza } key={ pizza.id }/>
        	// </div>
        ));
    }
}


// propTypes
Pizzas.propTypes = {
	pizzas: PropTypes.array.isRequired
}


export default Pizzas;

// if (document.getElementById('pizzas')) {
//     ReactDOM.render(<Pizzas />, document.getElementById('pizzas'));
// }
