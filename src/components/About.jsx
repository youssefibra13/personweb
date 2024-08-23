import React from 'react'
import aboutImg from '../assets/Avatar2.png'

const About = () => {
  return (
    <div className='section About-wrapper'>
        <div className='About-container'>
            <h2> About Me </h2>
              <p> I am a Software Engineer with a B.S in Computer Engineering. I have a passion for learning new technologies and building software applications. I am proficient in Java, Python, JavaScript, and C++. I have experience working with React, Node.js, Express.js, and MongoDB. I am currently seeking a full-time software engineering position. </p>
              <div className="skills">
                  <h2> My Skills </h2>
                  <div className="skillwrapper">
                      <div className="skill">
                          <h3> React JS </h3>
                          <div className='line'></div>
                      </div>
                      <div className="skill">
                          <h3> JavaScript </h3>
                          <div className='line'></div>
                      </div>
                      <div className="skill">
                          <h3> Python</h3>
                          <div className='line'></div>
                      </div>
                      <div className="skill">
                          <h3> C/C++ </h3>
                          <div className='line'></div>
                      </div>
                      <div className="skill">
                          <h3> Figma </h3>
                          <div className='line'></div>
                      </div>
                      <div className="skill">
                          <h3> FullStack </h3>
                          <div className='line'></div>
                      </div>
                      <div className="skill">
                          <h3>  ExpressJS</h3>
                          <div className='line'></div>
                      </div>

                  </div>
              </div>
        </div>
          <div className="AboutImg">
              <img src={aboutImg} alt="About Image" />


        </div>
    </div>
  )
}

export default About