import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import mail_icon from '../assets/mail_icon.svg';
import location_icon from '../assets/location_icon.svg';
import phone_icon from '../assets/call_icon.svg';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_m1yzmrj', 
      'template_yxy0hkr', 
      form.current,
      'VMrkSVWE8m7qB8wdT' 
    )
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
    }, (error) => {
        console.log(error.text);
        alert('An error occurred. Please try again.');
    });

    e.target.reset();
  };

  return (
    <div className='contact'>
      <h1 className='contact-title'>Get in Touch</h1>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Connect with me</h2>
          <p>I'm currently open for work.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" />
              <p>youssefibrahim603@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phone_icon} alt="phone" />
              <p>+1 (224) 234-8030</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Evanston, IL</p>
            </div>
          </div>
        </div>
        <form ref={form} className="contact-right" onSubmit={sendEmail}>
          <label htmlFor='name'>Your Name</label>
          <input type="text" id='name' placeholder="Enter your name" name='name' required />
          <label htmlFor='email'>Your Email</label>
          <input type="email" id='email' placeholder="Enter your email" name='email' required />
          <label htmlFor='message'>Your Message</label>
          <textarea id='message' placeholder="Enter your message" rows="8" name='message' required></textarea>
          <button type="submit" className='contact-submit'>Send</button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
