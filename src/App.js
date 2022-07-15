import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import Buscar from './components/Buscar';
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Listado" element={<Listado />} />
        <Route path="/Buscar" element={<Buscar />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
