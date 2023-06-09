import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './../styles/QuestionBox.css'

function QuestionsBox() {
  return (
    <div className='question'>
        <div className='question_technology_box'>
          <div style={{width:'100%'}}>
            <div className='question_technology_number'>
              <p> React </p>
              <div> 4 </div>
            </div>
          </div>
        </div>
        <div className='question_contain'>
          <div className='question_contain_header'>
            <div className='number_question'> 10 questions </div>
            <Link to='/add_question'><button className='apply_question'> Poser une question <FontAwesomeIcon icon={faArrowRight} /> </button></Link>
          </div>
          <div className='question_contain_body'>
            <div className='q_c_body_info'> 
              <p className='question_title'> Titre de la question </p>
              <p className='question_date'> Date de la question </p>
              <p className='question_info'> contenu de la question </p>
              <p className='number_reponse_box'> nombre de reponses </p>
            </div>
            <div className='technology_search'> React </div>
          </div>
        </div>
    </div>
  )
}

export default QuestionsBox