import React from 'react';

function Footer(){
  return (
    <div className="footer-container">
      <div className='footer-major'>
        <div className='footer-text'>
        <h1> Foodies </h1>
        <p> ...your home of good foods... </p>
        </div>
      <ul>
        <li> <a href="/"> Home </a> </li>
        <li> <a href="/about"> About</a> </li>
        <li> <a href="/product"> Products </a> </li>
        <li> <a href="/contact"> Contact </a> </li>
      </ul>
    </div>
    
      <div style = {{textAlign: 'center'}}>
        <p> &copy; SideHustle ReactJS interns (group 82) 2022 </p>
      </div>
    </div>
  );
}

export default Footer;