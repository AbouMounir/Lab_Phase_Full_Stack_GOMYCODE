import React from 'react'
import Acces from './acces'
import DevBox from './DevBox'


function Connexion() {
  return (
    <div className='con'>
       < DevBox />
       <div className='from_container'>
        <div className='from_box'>
          <h1 style={{color:"rgb(30,30,100)", fontSize:"2.5rem"}}> Se connecter </h1>
          <form className='from'>
            < Acces />
            <button type="submit"> Connexion </button>
          </form>
          <p className='p'> Si vous n'avez pas de compte, vous pouvez vous inscrire</p>
        </div>
       </div>
    </div>
  )
}

export default Connexion