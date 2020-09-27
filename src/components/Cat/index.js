import React, { Component } from 'react'
import './styles.css'
import CatImage from '../../statics/cat.jpg'

export default class Cat extends Component {
  render () {
    const mouse = this.props.mouse
    const x = mouse.x - 75
    const y = mouse.y - 25
    return (
      <figure className='catimg' style={{ position: 'absolute', left: x, top: y }}>
        <img src={CatImage} alt='cat' />
      </figure>
    )
  }
}
