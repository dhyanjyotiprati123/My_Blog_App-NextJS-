import React from 'react';
import Link from 'next/link';

const Links = [
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Posts",
        path: "/posts"
    }
]

const NavbarLinks = () => {
  return (
    <div className='navbar-links'>
       {
        Links.map((item) => <Link className='navbar-link' href={item.path} key={item.path}>{item.title}</Link>)
       }
    </div>
  )
}

export default NavbarLinks