import React from 'react'
import { NavLink } from 'react-router-dom';
// import Home from './Home';
// import Service from './Service';

function Contact() {
  return (
    <div>
        <div className='links'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <NavLink to="/Service">Service</NavLink>
      </div>
      <div>
      <h1>You can mail me help@geekster.in</h1>
      </div>
    </div>
  )
}

export default Contact
