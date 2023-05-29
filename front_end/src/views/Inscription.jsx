import React from 'react'
import Acces from '../components/acces'
import DevBox from '../components/DevBox'
import { Link } from 'react-router-dom'

function Inscription() {
  return (
    <div className='ins'>
        <DevBox />
        <div className="from_container">
            <div className='from_box'>
                <h1 style={{color:"rgb(30,30,100)", fontSize:"2.5rem"}}> Créer mon compte </h1>
                <form action="" className='from'>
                    <div className="from-group">
                        <label htmlFor=""> Nom </label>
                        <div className="input">
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <Acces />
                    <div className="from-group">
                        <label htmlFor=""> Mot de passe(confirmation) </label>
                        <div className='input'>
                            <input type="password" name="" id="" />
                        </div>
                    </div>
                    <Link to='/home'> <button type="submit"> Inscription </button> </Link>
                </form>
                <p className='p'> Si vous avez déjà un compte, vous pouvez vous <Link to='/'>connecter</Link> </p>
            </div>
        </div>
    </div>
  )
}

export default Inscription