import React from 'react'
import { Link } from 'react-router-dom'

function QuestionApp() {
  return (
    <div className="q_container">
        <div className='question_box'>
            <div style={{display:'flex'}}>
                <div style={{width:'80%'}}>
                    <h1> Poser une question </h1>
                    <p className='info'> Vous rencontrez des problèmes? Notre communauté de développeurs est là pour vous aider! </p>
                </div>
                <Link to='/home'> <div> Retour</div> </Link>
            </div>
            <form action="" method="post" className='q_from'>
                <div className="from-group">
                    <label htmlFor=""> Titre de la question </label>
                    <div>
                        <input className='input' type="text" name="" id="" />
                    </div>
                </div>
                <div className="from-group">
                    <label htmlFor=""> Contenu de la question </label>
                    <div>
                        <textarea name="" id="" cols="76" rows="15"> </textarea>
                    </div>
                </div>
                <div className="from-group">
                    <label htmlFor=""> Technologies / Catégories </label>
                    <div>
                        <input className='input' type="text" name="" id="" placeholder='type something'/>
                    </div>
                </div>
            </form>
            <button type="submit"> Poser ma question </button>
        </div>
    </div>
  )
}

export default QuestionApp