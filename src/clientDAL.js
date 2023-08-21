import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api'

export async function fetchProducts() {
  try {
    const response = await axios.get(`${BASE_URL}/products`)
    return response.data
  } catch (error) {
    throw error
  }
}