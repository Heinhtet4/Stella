import React, { useState } from 'react'
import Container from '../Container'
import NavStart from './NavStart'
import NavCenter from './NavCenter'
import NavEnd from './NavEnd'

const Navigation = () => {
  const [navShadow, setNavShadow] = useState(false);
  const handleShadow = () => {
    if (window.scrollY >= 50) {
      setNavShadow(true);
    } else {
      setNavShadow(false);
    }
  }
  window.addEventListener("scroll", handleShadow);
  return (
    <header className='sticky top-0 w-full z-40'>
        <Container>
        <div className={`navbar h-[64px] relative bg-base-200 ${navShadow ? "shadow-lg rounded-b-xl" : ""}`}>
            <NavStart/>
            <NavCenter/>
            <NavEnd/>
        </div>
        </Container>
    </header>
  )
}

export default Navigation