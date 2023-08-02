import {Routes, Route} from 'react-router-dom';
import './App.css';
import QuestionApp from './views/QuestionApp';
import Inscription from './views/Inscription';
import Connexion from './views/Connexion';
import Accueil from './views/Accueil';
import CommentApp from './views/CommentApp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Connexion />} />
        <Route path='/register' element={<Inscription />} />
        <Route path='/home' element={<Accueil />} />
        <Route path='/add_question' element={<QuestionApp />} />
        <Route path='/comment/:id' element={<CommentApp />} />
      </Routes>
    </div>
  );
}

export default App;
