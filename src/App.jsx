import { useState } from 'react'
import './App.css'
import NavBar from "./components/navbar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"
import Footer from "./components/footer"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">

        <NavBar/>

        <div className="flex-grow">
          <Routes>
            <Route path = "/" element={<HomePage />} /> 
            <Route path = "/about" element={<AboutPage />} />
            <Route path = "/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
