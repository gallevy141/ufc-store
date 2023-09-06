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
        const response = await axios.post(`${BASE_URL}/users/register`, userData)
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
    try {
        const response = await axios.post(`${BASE_URL}/users/login`, loginData)
        if (response.status === 200) {
            return response.data
        } else {
            throw new Error('Unexpected response from the server during login.')
        }
    } catch (error) {
        throw error
    }
}