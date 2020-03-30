// your ImageSlider code here!

import React, { Component } from 'react';



class ImageSlider extends Component {
    state = {
        currentSlideIndex: 0
        };
    render() { 
          return ( <p>I am on slide<span> {this.state.currentSlideIndex}</span></p> ) 
    }
}
 
export default ImageSlider;