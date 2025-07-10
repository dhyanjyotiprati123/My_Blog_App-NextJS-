import React from 'react'
import NavbarLinks from './NavbarLinks'
import NavbarBtns from './NavbarBtns'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-wrapper">
            <div className="navbar-logo">
               <Link href={"/"} >LOGO</Link>
            </div>
            <div className="navbar-controls">
                <NavbarLinks />
                <NavbarBtns />
            </div>
        </div>
    </div>
  )
}

export default Navbar