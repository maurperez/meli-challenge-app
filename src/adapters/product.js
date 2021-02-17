const BASE_URL = process.env.REACT_APP_API_URL

const search = async (query, limit) => {
  console.log(BASE_URL)
  const response = await fetch(
    `${BASE_URL}/items?q=${query}&limit=${limit || 50}`
  )
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
