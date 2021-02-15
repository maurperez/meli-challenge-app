import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CajaDeBusqueda } from './pages/CajaDeBusqueda'
import { ResultadosDeBusqueda } from './pages/ResultadosDeBusqueda'
import { Container } from './components/Container'
import './styles/index.scss'
import { NavBar } from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <NavBar/>
        <Switch>
          <Route path='/' exact>
            <CajaDeBusqueda />
          </Route>
          <Route path='/items' exact>
            <ResultadosDeBusqueda></ResultadosDeBusqueda>
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App
