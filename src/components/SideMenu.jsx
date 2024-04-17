import React, { useState } from 'react'
import './sideMenu.css'
import navListData from '../data/navListData'
import NavListItem from './NavListItem'

function SideMenu({ active, sectionActive }) {
  // State to manage navigation data
  const [navData, setNavData] = useState(navListData)

// Function to handle navigation item click
  const handleNavOnClick = (id, target) => {
 
    // Updating the active state of navigation items
    const newNavData = navData.map(nav => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    // Setting the updated navigation data
    setNavData(newNavData);
    // Calling the sectionActive function passed as prop
    sectionActive(target);
  };
  return (
    <div className={`sideMenu ${active ? 'active' : undefined}`}>
      <a href='#' className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>
      </a>
      <ul className="nav">
        {navData.map(item => (
          <NavListItem
            key={item._id}
            item={item}
            navOnClick={handleNavOnClick}
          />))}
      </ul>

      <ul className="social">
        <li>
          <a href="#">
            <i className="bi bi-meta"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-twitter-x"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bi bi-youtube"></i>
          </a>
        </li>
        <li>
          <a href="#" className="share">
            <i className="bi bi-share"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideMenu