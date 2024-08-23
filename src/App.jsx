import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
