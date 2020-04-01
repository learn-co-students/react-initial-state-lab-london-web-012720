
import React  from 'react'

class Bomb extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }

  }

  secondLeft = () => {
    if(this.state.secondsLeft == 0){
      return <h1>Boom!</h1>
    }
    return `${this.state.secondsLeft} seconds left before I go boom!`
    
  }


  render(){
  return(
    <div>
      {this.secondLeft()}
    </div>
  )
  }

}

export default Bomb