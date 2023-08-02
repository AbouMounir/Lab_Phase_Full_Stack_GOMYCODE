import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../styles/QuestionBox.css'

function QuestionsBox() {

  const [questionData, setQuestionData] = useState([])
  const data1 = [{techno : 'React', id : 0},
                  {techno : 'PHP', id : 0},
                  {techno : 'MongoDB', id : 0},
                  {techno : 'NoSQL', id : 0}]


  useEffect(() => {
    axios.get('http://localhost:3001/questions').then(res => setQuestionData(res.data));
  },[]);

  for (let index = 0; index < data1.length; index++) {
    questionData.map((item) => {
      item.Technology.map((elt) => {
        if (elt === data1[index].techno) {
          data1[index].id++;
        }
      })
    })
    
  }

  return (
    <div className='question'>
        <div className='question_technology_box'>
          <div style={{width:'100%'}}>
            {
                data1.map((item,index) => {return(
                  <div className='question_technology_number' key={index}>
                    <div> {item.techno} </div>
                    <div className='div d-flex justify-content-center align-items-center'> {item.id} </div>
                  </div>
                )})
              }
          </div>
        </div>
        <div className='question_contain'>
          <div className='question_contain_header'>
            <div className='number_question'> {questionData.length} questions </div>
            <Link to='/add_question'><button className='apply_question'> Poser une question <FontAwesomeIcon icon={faArrowRight} /> </button></Link>
          </div>
          {
            questionData.map((question,id) => {
              return(
                <div className='question_contain_body' key={id}>
                  <div className='q_c_body_info'> 
                    <Link to={`/comment/:${question._id}`}> <p className='question_title'> {question.Title} </p> </Link>
                    <p className='question_date'> {question.Date} </p>
                    <p className='question_info'> {question.Contain} </p>
                    <p className='number_reponse_box'> nombre de reponses </p>
                  </div>
                  <div className='technology_search d-flex'> {question.Technology.map((item,index) => {return(<div className='mx-2' key={index}>{item}</div>)})} </div>
                </div>
              )
            })
          }
          
        </div>
    </div>
  )
}

export default QuestionsBox