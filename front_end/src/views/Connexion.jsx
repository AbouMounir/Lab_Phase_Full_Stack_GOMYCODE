import React from 'react'
import { Link } from 'react-router-dom'
import Acces from '../components/acces'
import DevBox from '../components/DevBox'


function Connexion() {
  return (
    <div className='con'>
       < DevBox />
       <div className='from_container'>
        <div className='from_box'>
          <h1 style={{color:"rgb(30,30,100)", fontSize:"2.5rem"}}> Se connecter </h1>
          <form className='from'>
            < Acces />
            <Link to='/home'> <button type="submit"> Connexion </button> </Link>
          </form>
          <p className='p'> Si vous n'avez pas de compte, vous pouvez vous <Link to='/register'>inscrire</Link> </p>
        </div>
       </div>
    </div>
  )
}

export default Connexion