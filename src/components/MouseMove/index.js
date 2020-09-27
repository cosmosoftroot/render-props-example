import React from 'react'
import './styles.css'

export default class MouseMove extends React.Component{

  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = {
      x:0,y:0
    }
  }

  handleMouseMove(event){
    this.setState({
        x: event.clientX,
        y: event.clientY
    })
  }

  render(){
    return (
      <div className='main' onMouseMove={this.handleMouseMove}>
          {this.props.render(this.state)}
      </div>
    )

  }

}
