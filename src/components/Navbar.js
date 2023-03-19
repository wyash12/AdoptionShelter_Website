import React from 'react'

export default function Navbar() {
  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Pet Shelter</a>
  
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/register">Register</a>
      </li> 
     
    </ul>
  </div>
</nav>
  </>
  )
}
