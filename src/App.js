import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CajaDeBusqueda } from './pages/CajaDeBusqueda'
import { ResultadosDeBusqueda } from './pages/ResultadosDeBusqueda'
import { Container } from './components/Container'
import './styles/index.scss'
import { NavBar } from './components/Navbar'
import { ProductDetalle } from './pages/ProductDetalle'

function App() {
  return (
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
  )
}

export default App
