import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CajaDeBusqueda } from './pages/CajaDeBusqueda'
import { ResultadosDeBusqueda } from './pages/ResultadosDeBusqueda'
import { Container } from './components/Container'
import './styles/index.scss'
import { NavBar } from './components/Navbar'
import { ProductDetalle } from './pages/ProductDetalle'
import { CacheProvider } from './contexts/cacheContext'

function App() {
  return (
    <CacheProvider>
      <BrowserRouter>
        <Container>
          <NavBar />
          <Switch>
            <Route path='/' exact>
              <CajaDeBusqueda />
            </Route>
            <Route path='/items' exact>
              <ResultadosDeBusqueda></ResultadosDeBusqueda>
            </Route>
            <Route path='/items/:id' exact>
              <ProductDetalle />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </CacheProvider>
  )
}

export default App
