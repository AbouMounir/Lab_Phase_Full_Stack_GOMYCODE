import React from 'react'

function NavBar() {
  return (
    <div className='nav_bar'>
       <div>
        <p> Baroland</p>
       </div>
       <div style={{display:'flex'}}>
        <p style={{marginRight:'2rem'}}> coulibalyaruna99@gmail.com </p>
        <p> Logout </p>
       </div>
    </div>
  )
}

export default NavBar