import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { productAdapter } from '../adapters/product'
import { Loading } from '../components/Loading'
import { useFetchReducer } from '../hooks/useFetchReducer'
import '../styles/ProductDetalle.scss'

export const ProductDetalle = () => {
  const { id } = useParams()

  const fetchObject = useMemo(
    () => ({
      resource: productAdapter.productDetail,
      parameters: [id],
      cacheIndentifier: id,
      typeResource: 'PRODUCT_DETAIL'
    }),
    [id]
  )

  const { data, error, loading } = useFetchReducer(fetchObject)

  const formatPrice = price =>
    price.amount.toLocaleString('es-AR', {
      style: 'currency',
      currency: price.currency
    })

  return (
    <>
      {loading && <Loading />}
      {error && <div>{error}</div>}
      {data && (
        <div className='product-container flex-column'>
          <div className='flex-row image-and-buy'>
            <div className='product-image'>
              <img src={data.picture} alt={data.title}></img>
            </div>
            <div className='buy-container flex-column'>
              <span className='condition-and-solds'>
                {data.condition} - {data.sold_quantity} vendidos
              </span>
              <h1 className='title'>{data.title}</h1>
              <span className='price'>{formatPrice(data.price)}</span>
              <button className='buy-btn' type='button'>
                Comprar
              </button>
            </div>
          </div>
          <div className='description-container flex-column'>
            <span>Desripcion del producto</span>
            <div className='description'>{data.description}</div>
          </div>
        </div>
      )}
    </>
  )
}
