import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams, } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function CommentApp() {

  const [questionData,setQuestionData] = useState([]);
  const [data, setData] = useState([])
  const [idData, setIdData] = useState('');
  const {id} = useParams()
  setIdData(id);

  useEffect(() => {
    axios.get('http://localhost:3001/questions').then(res => setQuestionData(res.data));
  },[questionData, idData])
  
  

  const questionData1 = questionData.filter(t => t._id == idData.substring(1))
  setData(questionData1)
  console.log(id.substring(1));
  console.log(idData.substring(1));
  console.log(questionData1);
  console.log(questionData);
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center' >
        <div className='w-50 my-5 py-5'>
          <div className="d-flex justify-content-between">
            <p> {data[0].Title}</p>
            <Link to='/home'> <div> Retour <FontAwesomeIcon icon={faArrowLeft} /></div> </Link>
          </div>
          <div className="p-3 border-bottom border-light border-2">
          sdfgh
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <p> 3 réponses</p>
            <p> auteur</p>
          </div>
          <div className="mt-3 mb-4">
            <div className='d-flex'>
              <div className='mx-2'> auteur</div>
              <div> durée du commentaire</div>
            </div>
            <div className='mt-3'> Contenu du commentaire</div>
          </div>
          <form action="" style={{position:'relative'}}>
            <textarea className='form-control' name="" id="" cols="30" rows="3"></textarea>
            <button className='btn btn-primary mt-3' style={{width:'150px',position:'absolute',right:'0px'}}> Commenter</button>
          </form>
        </div>
    </div>
  )
}

export default CommentApp