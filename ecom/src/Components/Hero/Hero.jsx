import React from 'react'
import '../Hero/Hero.css'
import hand_img from '../Assets/hand_icon.png'
import arrow_img from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
      <h2>New arrival</h2>
      <div>
        <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_img} alt="" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
      </div>
      <div className="hero-latest-button">
        <div>Latest Collection</div>
        <img src={arrow_img} alt="" />
      </div>
      </div>
      <div className="hero-right">
      <img src={hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero
