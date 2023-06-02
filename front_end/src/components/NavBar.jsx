import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='nav_bar'>
       <div>
        <p> Baroland</p>
       </div>
       <div style={{display:'flex'}}>
        <p className='mail' style={{marginRight:'2rem'}}> coulibalyaruna99@gmail.com </p>
        <Link to='/' style={{textDecoration: 'none'}}> <p className='out'> Logout </p> </Link>
       </div>
    </div>
  )
}

export default NavBar