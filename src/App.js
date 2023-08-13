import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';

//Import components
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './pages/MainPage'

function App() {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<MainPage />} />
              {/*other routes here as needed */}
          </Routes>
          <Footer />
      </Router>
  )
}

export default App