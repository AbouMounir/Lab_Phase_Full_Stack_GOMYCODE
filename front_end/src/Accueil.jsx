import React from 'react'
import InfoApp from './InfoApp'
import NavBar from './NavBar'
import QuestionsBox from './QuestionsBox'

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