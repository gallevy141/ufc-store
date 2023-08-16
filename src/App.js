import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

//Import components
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import Register from './pages/RegisterPage'
import Browse from './pages/Browse'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import ReceiptPage from './pages/ReceiptPage'

function App() {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/receipt" element={<ReceiptPage />} />
              {/*other routes here as needed */}
          </Routes>
          <Footer />
      </Router>
  )
}

export default App