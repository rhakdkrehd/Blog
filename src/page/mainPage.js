import React from 'react'

import "./banner.css"

import BackImg from '../img/main.png'
import MainMoon from "../img/mainMoon.png"

const Banner = () => {
  return (
    <div className='banner'>
      <img className='backImg' src={BackImg} alt='Back img' />
      <img className='moon' src={MainMoon} alt='Moon'/>
      <span>MIN</span>
      <p>
        Web Developer Portfolio
      </p>
    </div>
  )
}

export default Banner