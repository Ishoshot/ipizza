import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Pizzas from './Pizzas';


class Catalogue extends Component{
  state = {
    pizzas: []
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/pizzas')
      .then(res => this.setState({ pizzas:res.data.data }));
  }

  render(){ 
      return (
        <div>
          <div className="row container-fluid p-xl-5 p-lg-5 md:tw-p-10 mt-3 m-0">
            <Pizzas pizzas={this.state.pizzas} />
          </div>
        </div>
      );
  }
}


export default Catalogue;

if (document.getElementById('catalogue')) {
    ReactDOM.render(<Catalogue />, document.getElementById('catalogue'));
}
