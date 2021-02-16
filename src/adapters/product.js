const BASE_URL = `http://localhost:8080/api`

const search = async (query, limit) => {
  console.log(query)
  const response = await fetch(`${BASE_URL}/items?q=${query}&limit=${limit || 50}`)
  if (!response.ok) {
    throw new Error('API Error')
  }
  return response.json()
}

const productDetail = async id => {
  const response = await fetch(`${BASE_URL}/items/${id}`)
  if (!response.ok) {
    throw new Error('API Error')
  }
  return response.json()
}

export const productAdapter = {
  search,
  productDetail
}
