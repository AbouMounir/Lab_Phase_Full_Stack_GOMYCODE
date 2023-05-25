import {Routes, Route} from 'react-router-dom';
import './App.css';
import QuestionApp from './QuestionApp';
import Inscription from './Inscription';
import Connexion from './Connexion';
import Accueil from './Accueil';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Connexion />} />
        <Route path='/register' element={<Inscription />} />
        <Route path='/home' element={<Accueil />} />
        <Route path='/add_question' element={<QuestionApp />} />
      </Routes>
    </div>
  );
}

export default App;
