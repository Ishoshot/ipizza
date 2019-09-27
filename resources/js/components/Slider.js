import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import Header from './Header';


class Slider extends Component{
    render(){ 
        return (
            <div>
              
              <div className="slider text-white">
                <div className="overlay tw-py-20 xl:tw-px-10 tw-px-5">
                  <div className="xl:tw-py-20">
                    <h1 className="tw-font-bold mt-5">Hi there! I am Pizza, Slice to meet you.</h1>
                  </div>
                </div>
              </div>
            
            </div>
        );
    }
}


export default Slider;

if (document.getElementById('slider')) {
    ReactDOM.render(<Slider />, document.getElementById('slider'));
}
