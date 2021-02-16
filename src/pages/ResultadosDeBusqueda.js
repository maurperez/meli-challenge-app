import '../styles/ResultadosDeBusqueda.scss'
import { ProductPreview } from '../components/ProductPreview'
import { Fragment, useMemo } from 'react'
import { Loading } from '../components/Loading'
import { useLocation } from 'react-router-dom'
import { useFetchReducer } from '../hooks/useFetchReducer'
import { productAdapter } from '../adapters/product'

export const ResultadosDeBusqueda = () => {
  const location = useLocation()

  const fetchObject = useMemo(() => {
    const elementsPerPage = 4
    const query = new URLSearchParams(location.search).get('search')

    return {
      resource: productAdapter.search,
      parameters: [query, elementsPerPage],
      cacheIndentifier: `q=${query}`,
      typeResource: 'SEARCH_PRODUCT'
    }
  }, [location])

  const { data, error, loading } = useFetchReducer(fetchObject)

  return (
    <>
      {loading && <Loading />}
      {error && <div>{error}</div>}
      {data && (
        <Fragment>
          <div className='products-container'>
            <span className='categories'>{data.categories?.join(' > ')}</span>
            {data.items.map(product => (
              <ProductPreview product={product} key={product.id} />
            ))}
          </div>
        </Fragment>
      )}
    </>
  )
}
