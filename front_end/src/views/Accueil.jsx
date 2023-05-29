import React from 'react'
import InfoApp from '../components/InfoApp'
import NavBar from '../components/NavBar'
import QuestionsBox from '../components/QuestionsBox'

function Accueil() {
  return (
    <div>
        <NavBar />
        <InfoApp />
        <QuestionsBox />
    </div>
  )
}

export default Accueil