import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo' >Nikhil Khare</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experirience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank"> <FaFacebookF/> </a>
        <a href="https://www.instagram.com/nikhilkhare09_/?hl=en" target="_blank" > <FiInstagram/> </a>
        <a href="https://twitter.com" target="_blank"> <IoLogoTwitter/> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Nikhil Khare.. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
