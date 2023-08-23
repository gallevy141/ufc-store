import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api';

export async function fetchProducts() {
    try {
        const response = await axios.get(`${BASE_URL}/products`)
        return response.data
    } catch (error) {
        throw error
    }
}

export async function registerUser(userData) {
    try {
        const response = await axios.post(`${BASE_URL}/users/register`, userData)
        return response.data
    } catch (error) {
        throw error
    }
}

export async function loginUser(loginData) {
    try {
        const response = await axios.post(`${BASE_URL}/users/login`, loginData)
        return response.data
    } catch (error) {
        throw error
    }
}