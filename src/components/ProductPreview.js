import '../styles/ProductPreview.scss'
import freeShippingLogo from '../assets/ic_shipping.png'

export const ProductPreview = ({ product }) => {
  const formatPrice = price =>
    price.amount.toLocaleString('es-AR', {
      style: 'currency',
      currency: price.currency
    })

  return (
    <div className='product-preview flex-row'>
      <div className='flex-row product-info'>
        <a href={`/items/${product.id}`} className='thumbtail'>
          <img src={product.picture} alt={product.title} />
        </a>
        <div className='flex-column price-and-title'>
          <div className='price-container flex-row'>
            <a className='price' href={`/items/${product.id}`}>
              {formatPrice(product.price)}
            </a>
            {product.free_shipping && (
              <img
                src={freeShippingLogo}
                alt='envio-gratis'
                className='icon-ship'
              ></img>
            )}
          </div>
          <h3 className='title'>{product.title}</h3>
        </div>
      </div>
      <span className='location'>{product.location}</span>
    </div>
  )
}
