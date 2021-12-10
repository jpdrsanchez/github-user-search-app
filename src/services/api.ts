import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json'
  }
})

export const getUser = async (name: string) => {
  try {
    const response = await api.get(`users/${name}`)
    return response.data
  } catch {
    throw 'No results'
  }
}
