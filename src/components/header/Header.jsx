import React from 'react';
import Button from './Button'
import '../../scss/Header.scss'

export default function Header () {

  return (
    <nav>
      <div className="header">
        <h2>OnePage</h2>
      </div>

      <div className="navbar">
        <ul>
          <li><a href={"#home"}>Home</a></li>
          <li><a href={'#about'}>About</a></li>
          <li><a href={'#services'}>Services</a></li>
          <li><a href={'#portfolio'}>Portfolio</a></li>
          <li><a href={'#team'}>Team</a></li>
          <li><a href={'#pricing'}>Pricing</a></li>
          <li className='dropdown' ><a href={'#dropdown'}>Drop Down</a>
            <div className="dropdown-content">
              <a href={'#link1'}>Nepavyko padaryti</a>
              <a href={'#link2'}>Link2</a>
              <a href={'#link3'}>Link3</a>
            </div>
          </li>
          <li><a href={'#contact'}>Contact</a></li>
          <li>

            <Button className='header-button' text='Get Started' />

          </li>
        </ul>
      </div>
    </nav>
  )
}