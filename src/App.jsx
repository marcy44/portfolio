import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
// import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <Router>
      <div className='App'>
      <Navbar /> {/* Navbar will be visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects:id" element={<ProjectDetail />} />
         <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        
        
      </Routes>
      
      </div>
    </Router>
 
  );
}

export default App;