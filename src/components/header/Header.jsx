import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
function Header() {
    return (
      <Header>
       <div className="container header_container">
          <h5> היי אני </h5>
          <h1> שלמה </h1>
          <h5 className="text-light">FullStack Developer</h5>
          <CTA/>
            <HeaderSocial/>
          <div className="me">
            <img src="{ME}" alt="me" />
          </div>

          <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
      </Header>
    )
  }
  
  export default Header