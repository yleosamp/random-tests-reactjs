import React from 'react'
import logoReact from '../assets/React-icon.svg.png'


const Header = () => {
  return (
    <header>
      <img src={logoReact} alt="Logo do ReactJS" width={80} />
      <h1>React JS</h1>
    </header>
  )
}

export default Header