import React from 'react'
import Link from './Link'

const NavSubMenu = ({ isToggle }) => {
  return (
    isToggle && 
    <nav
    style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            top: '70px',
            left: 195,
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '2px 2px 8px #ccc',
            padding: '8px'
          }}
    >
      <Link to='#'>Todo List</Link>
      <Link to='#'>Calendar</Link>
      <Link to='#'>Reminders</Link>
      <Link to='#'>Planning</Link>
    </nav>
  )
}

export default NavSubMenu