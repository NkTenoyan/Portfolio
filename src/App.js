import './App.css';
// import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Background from './components/Bacground';


function App() {
  return (
    <div className="App">
      <Background />
      <div className="nav">
        <Navbar />
      </div>

      <div id='home'>
        <Home/>
      </div>

      <section id='about'>
        <About/>
      </section>

      <section id='skills'>
        <Skills/>
      </section>

      <section id='project'>
        <Project/>
      </section>

      <section id='contact'>
        <Contact/>
      </section>
      
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      
    </div>
  );
}

export default App;
