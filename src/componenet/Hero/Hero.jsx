//import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className= "hero">
        <img src={profile_img} alt="" />
        <h1><span>I'm Safiutheen Sahran,</span> frontend developer</h1>
        <p>I am frontend developer from Puttalam, SL with 1 year of experience in multiple projects</p>
        <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me
            </AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero