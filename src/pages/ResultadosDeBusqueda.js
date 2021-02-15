import '../styles/ResultadosDeBusqueda.scss'
import { ProductPreview } from '../components/ProductPreview'
import { Fragment, useEffect, useState } from 'react'
import { NavBar } from '../components/Navbar'
import { Loading } from '../components/Loading'
import { useLocation } from 'react-router-dom'

export const ResultadosDeBusqueda = () => {
  const [searchState, setSearchState] = useState({
    response: null,
    loading: false,
    error: null
  })
  const location = useLocation()

  const fetchData = () => {
    const query = new URLSearchParams(location.search).get('search')

    setSearchState({
      response: null,
      loading: true,
      error: null
    })
    fetch(`http://localhost:8080/api/items?q=${query}`)
      .then(res => res.json())
      .then(res =>
        setSearchState({
          response: res,
          loading: false,
          error: null
        })
      )
      .catch(err =>
        setSearchState({
          response: null,
          loading: false,
          error: err.message
        })
      )
  }

  useEffect(fetchData, [location])

  return (
    <>
      {searchState.loading && <Loading />}
      {searchState.error && <div>{searchState.error}</div>}
      {searchState.response && (
        <Fragment>
          <div className='products-container'>
            <span className='categories'>
              {searchState.response.categories?.join(' > ')}
            </span>
            {searchState.response.items.slice(0, 4).map(product => (
              <ProductPreview product={product} key={product.id} />
            ))}
          </div>
        </Fragment>
      )}
    </>
  )
}
