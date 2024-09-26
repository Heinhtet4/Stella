import React from 'react'
import NavMobile from './NavMobile'
import { GiBowTieRibbon } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const NavStart = () => {
  return (
    <div className="navbar-start">
        <NavMobile/>
        <Link to={"/"} className="btn btn-ghost text-xl text-primary font-bold"><GiBowTieRibbon /> STELLA</Link>
    </div>
  )
}

export default NavStart