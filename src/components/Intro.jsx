import React from 'react'
import AVATAR from '../assets/Avatar2.png'
import RESUME from '../assets/resume.pdf'; // Import the resume file


const Intro = () => {
  return (
    <div className='Intro-wrapper'>
        <div className='Intro-container'>
            <img src={AVATAR} alt='Personal Picture' />
            <h1>Hello 👋, I'm <span>Youssef Ibrahim</span></h1>
            <p>I am a <strong>Software Engineer</strong> with a B.S in Computer Engineering</p>
            <div className='social-icons'>
                <i className='ri-facebook-line'></i>
                <i className='ri-linkedin-box-line'></i>
                <i className='ri-github-line'></i>
            </div>
            <a href={RESUME} download className='resume-btn'>
              Resume
            </a>
        </div>
    </div>
  );
}

export default Intro;