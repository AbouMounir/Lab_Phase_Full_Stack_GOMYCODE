import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import DevBox from '../components/DevBox'


function Connexion() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/users/loginin',{email,password})
        .then((res) => {
          console.log(res.data);
          
        })
        .catch(
        ) 
      axios.get('http://localhost:3001/users/loginin')
        
    } catch(error){
      console.log(error);
    }


    setEmail('');
    setPassword('');

  }
  return (
    <div className="container-fluid">
      <div className='row' style={{height:'100vh'}}>
       < DevBox />
       <div className='col-sm-6 col-12 d-flex flex-column justify-content-center align-items-center'>
        <div className='w-75'>
          <h1 style={{color:"rgb(30,30,100)", fontSize:"2.5rem"}}> Se connecter </h1>
          <form className='from' onSubmit={handleSubmit}>
            <div className="form-group">
              <label className='form-label' htmlFor=""> Email </label>
              <div className='mb-4'>
                  <input  onChange={(e) => setEmail(e.target.value)} className='form-control' type="email" name="" id="" />
              </div>
            </div>
            <div className="form-group">
              <label className='form-label' htmlFor=""> Mot de passe </label>
              <div className='mb-4'>
                  <input onChange={(e) => setPassword(e.target.value)} className='form-control' type="password" name="" id="" />
              </div>
            </div>
            <button className='btn btn-primary' type="submit"> Connexion </button>
          </form>
          <p className='p'> Si vous n'avez pas de compte, vous pouvez vous <Link to='/register'>inscrire</Link> </p>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Connexion