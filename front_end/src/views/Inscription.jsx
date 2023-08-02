import React, { useState }  from 'react'
import DevBox from '../components/DevBox'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Inscription() {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_c, setPassword_c] = useState('');
    
    /* const axiosPostUsers = async() => {
        const postUsers = {
            name : name,
            email : email,
            password : password,
            password_c : password_c,
        }

        await axios.post('http://localhost:4000/users',postUsers)
        .then(res => res.json())
        .then(data => console.log(data))
    } */

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        
        try {
            await axios.post('http://localhost:3001/users/signup',{
                name ,email, password,password_c
            })
            axios.get('http://localhost:3001/users/signup')
                .then(() => navigate('/home'))
                .catch((error) => {
                    console.log(error)})
            
        } catch (error) {
            alert('mot de passe incorrect')
            console.log(error);
        }
        setEmail('');
        setName('');
        setPassword('');
        setPassword_c(''); 
        

    }

    return (
        <div className='container-fluid'>
            <div className="row" style={{height:'100vh'}}>
            <DevBox />
            <div className="col-sm-6 col-12 d-flex flex-column justify-content-center align-items-center">
                <div className='from_box'>
                    <h1 style={{color:"rgb(30,30,100)", fontSize:"2.5rem"}}> Créer mon compte </h1>
                    <form action="" className='from' onSubmit={handleOnSubmit}>
                        <div className="form-group">
                            <label className='form-label' htmlFor=""> Nom </label>
                            <div className="mb-4">
                                <input onChange={(e) => setName(e.target.value)} className='form-control' type="text" name="" id="" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className='form-label' htmlFor=""> Email </label>
                            <div className='mb-4'>
                                <input onChange={(e) => setEmail(e.target.value)} className='form-control' type="email" name="" id="" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className='form-label' htmlFor=""> Mot de passe </label>
                            <div className='mb-4'>
                                <input onChange={(e) => setPassword(e.target.value)} className='form-control' type="password" name="" id="" />
                            </div>
                        </div>         
                        <div className="form-group">
                            <label className='form-label' htmlFor=""> Mot de passe(confirmation) </label>
                            <div className='mb-4'>
                                <input onChange={(e) => setPassword_c(e.target.value)} className='form-control' type="password" name="" id="" />
                            </div>
                        </div>
                        <button className='btn btn-primary'  type="submit"> Inscription </button>
                    </form>
                    <p className=''> Si vous avez déjà un compte, vous pouvez vous <Link to='/'>connecter</Link> </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Inscription