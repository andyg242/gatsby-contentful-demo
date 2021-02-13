import React from 'react'
import { Link } from 'gatsby'

const navbarBrandStyles = {
  'display': 'inline-block',
  'padding-top': '.3125rem',
  'padding-bottom': '.3125rem',
  'margin-right': '1rem',
  'font-size': '1.25rem',
  'line-height': 'inherit',
  'white-space': 'nowrap',
  'font-weight': '800',
  'color': '#FFF',
  'text-decoration': 'none'
}

export default () =>  
<>
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <div class="container">
    <Link style={navbarBrandStyles} to="/">Gatsby News</Link>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link to="/blog">Blog</Link>
        </li>
        <li class="nav-item">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li class="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>  
