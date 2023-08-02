import React, { useState } from 'react'
import {Multiselect} from 'multiselect-react-dropdown'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



function QuestionApp() {


    const data = [{techno : 'React', id : 0},
                  {techno : 'PHP', id : 1},
                  {techno : 'MongoDB', id : 2},
                  {techno : 'NoSQL', id : 3}]

    const navigate = useNavigate();              
    const [options] = useState(data)
    const [title, setTitle] = useState('');
    const [contain, setContain] = useState('');
    const select = [] ;
    const [technology, setTechnology] = useState(select);
    const [date] = useState(Date.now)

    const handleSelect = (l) => {
        l.map(item => select.push(item.techno))
        setTechnology(select);
    } 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3001/questions', {title, contain, technology,date})

        } catch(error) {
            console.log(error);
        }
        navigate('/home');
    }
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className='w-50 my-5 py-5'>
            <div style={{display:'flex'}}>
                <div style={{width:'80%'}}>
                    <h1> Poser une question </h1>
                    <p className='info'> Vous rencontrez des problèmes? Notre communauté de développeurs est là pour vous aider! </p>
                </div>
                <Link to='/home'> <div> Retour <FontAwesomeIcon icon={faArrowLeft} /></div> </Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div className=" mt-4form-group">
                    <label className='form-label' htmlFor=""> Titre de la question </label>
                    <input className='form-control' onChange={e => setTitle(e.target.value)}  type="text" name="" id="" />
                </div>
                <div className="mt-4 form-group">
                    <label className='form-label' htmlFor=""> Contenu de la question </label>
                    <textarea className='form-control' onChange={e => setContain(e.target.value)} name="" id="" cols="76" rows="12"> </textarea>
                </div>
                <div className="mt-4 form-group">
                    <label className='form-label' htmlFor=""> Technologies / Catégories </label>
                    <Multiselect onSelect={(l) => handleSelect(l)} options={options} displayValue="techno" />
                </div>
                <button className='mt-4 btn btn-primary' type="submit"> Poser ma question <FontAwesomeIcon icon={faArrowRight} /> </button>
            </form>
            
        </div>
    </div>
  )
}

export default QuestionApp