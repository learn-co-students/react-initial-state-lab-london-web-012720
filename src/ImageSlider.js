import React  from 'react'


class ImageSlider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentSlideIndex: 0
    }
  }

  renderCurrentSlide = () => {
    return `I am on slide ${this.state.currentSlideIndex}`
  }

  render() {
    return(
      <div>
        {this.renderCurrentSlide()}
      </div>
    )
  }
}



export default ImageSlider
