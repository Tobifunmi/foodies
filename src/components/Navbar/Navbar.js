import React from 'react'

function Navbar() {
  return (
    < div className='navbar'>
        <div className='logo'>
          <h1> Foodies </h1>
        </div>
        <ul className='nav-links'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/product">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar