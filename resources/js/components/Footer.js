import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Footer extends Component{
    render(){ 
        return (
            <div>
                <div className="p-5 text-white text-center" style={footer}>
                  <p>Powered by ipizza | Developed by <a href="https://www.github.com/ishoshot">Oluwatobi</a> | Copyright &copy; 2019</p>
                </div>
            </div>
        );
    }
}


export default Footer;

const footer = {
  backgroundColor: '#111',
  fontSize: '15px',
}

if (document.getElementById('footer')) {
    ReactDOM.render(<Footer />, document.getElementById('footer'));
}
