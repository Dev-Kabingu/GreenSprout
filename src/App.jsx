import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import HowYouCanHelp from './pages/HowYouCanHelp';
import Shop from './pages/Shop';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/HowYouCanHelp' element = {<HowYouCanHelp />} />
        <Route path= '/Shop' element = {<Shop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
