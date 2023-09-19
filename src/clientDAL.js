import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api'

export const fetchProducts = async (params = {}) => {
    const response = await fetch('/api/products?' + new URLSearchParams(params))
    if (response.ok) {
      return await response.json()
    } else {
      throw new Error('Failed to fetch products')
    }
  }

export async function registerUser(userData) {
    try {
        console.log("Sending user data to server:", userData)
        const response = await axios.post(`${BASE_URL}/users/register`, userData)
        console.log("Server response:", response.data)
        if (response.status === 200) {
            return response.data
        } else {
            throw new Error('Unexpected response from the server during registration.')
        }
    } catch (error) {
        throw error
    }
}

export async function loginUser(loginData) {
    const response = await axios.post(`${BASE_URL}/users/login`, loginData)
    if (response.status === 200) {
        return response.data
    } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Unexpected response from the server during login.');
    }
}

export const fetchCartItems = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/cart/${userId}`)
        if (response.status === 200) {
            return response.data
        } else {
            throw new Error('Failed to fetch cart items')
        }
    } catch (error) {
        throw error
    }
}

export const addProductToCart = async (userId, productId) => {
    try {
        const response = await axios.post(`${BASE_URL}/cart/${userId}/add`, { productId, quantity: 1 })
        if (response.status === 200) {
            return response.data
        } else {
            throw new Error('Failed to add product to cart')
        }
    } catch (error) {
        throw error
    }
}

export const removeProductFromCart = async (userId, productId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/cart/${userId}/remove/${productId}`)
        if (response.status === 200) {
            return response.data
        } else {
            throw new Error('Failed to remove product from cart')
        }
    } catch (error) {
        throw error
    }
}

export const getLoggedInUser = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users/me`)
        if (response.status === 200) {
            return response.data
        } else {
            throw new Error('Failed to fetch logged-in user details')
        }
    } catch (error) {
        throw error
    }
}