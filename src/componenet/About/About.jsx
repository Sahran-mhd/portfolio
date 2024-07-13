//import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/pictures/profile_four.svg'

const About = () => {
  return (
    <div id='about' className="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className='about-sections'>
            <div className="about-left">
                <img src={profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>akhfglakfha falksjfhkfhlfh falksjhfakcjh awufyhpowfh fhapofhpqohf rhpweoarfhpoh pEOHF</p>
                    <p>urewfhdclajkfhv fgraidsuvhalh fuhaedvcl EFHPAOHFPOHFPH REUWIFAUIH psefhjjorfgrevio rgfhpseoigfjvs</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Tailwind CSS</p><hr style={{width:"100%"}}/></div>
                    <div className="about-skill"><p>ReactJS</p><hr style={{width:"40%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>01+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>02+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About