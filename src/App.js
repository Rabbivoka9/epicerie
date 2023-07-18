import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Accueil from './pages/Accueil'
import Services from './pages/Services';
import './App.css';
import Apropos from './pages/Apropos';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/Apropos' element={<Apropos/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
