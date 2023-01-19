import React from 'react'
import { NavLink } from 'react-router-dom'
// import Home from './Home'
// import Contact from './Contact'

function Service() {
  return (
    <div>
        <div className='links'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <NavLink to="/Service">Service</NavLink>
      </div>
      <div>
      <h1>Our service are not available</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae quas aliquid necessitatibus eius voluptate expedita, sed esse, minus officia recusandae illo hic commodi aliquam officiis culpa sit, modi asperiores?</p>
      </div>
    </div>
  )
}

export default Service
