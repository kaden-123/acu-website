import { useState } from 'react'
import './App.css'
import NavBar from "./components/navbar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path = "/" element={<HomePage />} /> 
        <Route path = "/about" element={<AboutPage />} />
        <Route path = "/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
