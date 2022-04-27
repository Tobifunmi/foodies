import React from 'react'
// import ReactDOM from 'react-dom'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faFacebook, faInstagram, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
  

export default function Contact() {
  return (
    <div className = 'Contact'>
      <h1 className = "Head">Reach Out to Us! </h1>
      
      <div>
        <p className = 'contact-text'>
          Find us at some address at some place or call us at 05050515-122330
        </p>
        <p className = 'contact-text'>
          We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.
        </p>
        <p className = 'contact-text'>
          Reserve a table, ask for today's special or just send us a message:
        </p>
        </div>
<div>
<form action="/" target="_blank">
      <p><input className="form" type="text" placeholder="Full Name" required name="Name"/></p>
      <p><input class="form" type="number" placeholder="Number of People" required name="People"/></p>
      <p><input class="form" type="datetime-local" placeholder="Date and time" required name="date" value="2022-04-27T20:00"/></p>
      <p><input class="form" type="text" placeholder="Message / Special requirements" required name="Message"/></p>
      <p><button class="btn-c" type="submit">SEND MESSAGE</button></p> </form>
      </div>
      <div>
        <p className='contact-text'>You can also send a message directly to our social media Platforms:</p>
      </div>
      <div className = 'socials'>
        <a href="https://www.facebook.com"><FontAwesomeIcon icon ={faFacebook} className = 'social-icon'></FontAwesomeIcon></a>
        <a href="https://www.instagram.com"><FontAwesomeIcon icon ={faInstagram} className = 'social-icon'></FontAwesomeIcon></a>
        <a href="https://www.whatsapp.com"><FontAwesomeIcon icon ={faWhatsapp} className = 'social-icon'></FontAwesomeIcon></a>
        <a href="https://www.twitter.com"><FontAwesomeIcon icon ={faTwitter} className = 'social-icon'></FontAwesomeIcon></a>
      </div>
    </div>
  )
}
