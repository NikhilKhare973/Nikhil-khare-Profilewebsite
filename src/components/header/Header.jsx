import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
// import index from '../../components/index.css'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Nikhil Khare</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <a href="#contact" className='scroll__dowm'>Scroll Down</a>    
        <div className="me">
          <img src={ME} alt="Me" />
        </div>

          
      </div>
    </header>
  )
}

export default Header