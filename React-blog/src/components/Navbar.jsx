import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './ThemeContext'

const Navbar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='navbar'>
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bollywood">Bollywood</Link></li>
        <li><Link to="/fitness">Fitness</Link></li>
        <li><Link to="/hollywood">Hollywood</Link></li>
        <li><Link to="/food">Food</Link></li>
        <li><Link to="/technology">Technology</Link></li>
      </ul>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark 🌙" : "Light ☀️"}
      </button>
    </div>
  )
}

export default Navbar