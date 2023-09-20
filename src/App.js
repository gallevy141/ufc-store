import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'

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
import ProfilePage from './pages/ProfilePage'
import AboutPage from './pages/AboutPage'
import UserContext from './components/UserContext'
import ResetPasswordPage from './pages/ResetPasswordPage'
import OrderHistoryPage from './pages/OrderHistory'

axios.defaults.withCredentials = true

const BASE_URL = 'http://localhost:5000'

function App() {
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        async function checkUserSession() {
            try {
                const response = await axios.get(`${BASE_URL}/api/users/me`)
                if (response.status === 200) {
                    setUser(response.data)
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    console.error("User is not authenticated")
                } else {
                    console.error("An error occurred while fetching user data:", error.message)
                }
            }
        }
    
        checkUserSession()
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
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
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/reset-password" element={<ResetPasswordPage />} />
                    <Route path="/order-history" element={<OrderHistory />} />
                    {/*other routes here as needed */}
                </Routes>
                <Footer />
            </Router>
        </UserContext.Provider>
    )
}

export default App