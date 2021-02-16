import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '../components/Loading'
import '../styles/ProductDetalle.scss'

export const ProductDetalle = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: null
  })

  const formatPrice = price =>
    price.amount.toLocaleString('es-AR', {
      style: 'currency',
      currency: price.currency
    })

  function fetchData(){
    setProduct({ loading: true, data: null, error: null })

    fetch(`http://localhost:8080/api/items/${id}`)
      .then(res => res.json())
      .then(productData => setProduct({loading: false, data: productData, error: null}))
      .catch(err => setProduct({loading: false, data: null, error: err.message}))
  }    

  useEffect(fetchData, [id])


  if(product.loading) { return <Loading/>}
  if(product.error) {return <div>{product.error}</div>}
  if(product.data) {
    console.log(product.data);
    return <div className='product-container flex-column'>
      <div className='flex-row image-and-buy'>
        <div className='product-image'>
          <img src={product.data.picture} alt={product.data.title}></img>
        </div>
        <div className='buy-container flex-column'>
          <span className='condition-and-solds'>{product.data.condition} - {product.data.sold_quantity} vendidos</span>
          <h1 className='title'>{product.data.title}</h1>
          <span className='price'>{formatPrice(product.data.price)}</span>
          <button className='buy-btn'type='button'>Comprar</button>
        </div>
      </div>
      <div className='description-container flex-column'>
        <span>Desripcion del producto</span>
        <div className='description'>{product.data.description}</div>

      </div>
    </div>
  }
  return null
} 