import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CajaDeBusqueda } from './pages/CajaDeBusqueda'
import { ResultadosDeBusqueda } from './pages/ResultadosDeBusqueda'
import { Container } from './components/Container'
import './styles/index.scss'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path='/' exact>
            <CajaDeBusqueda />
          </Route>
          <Route path='/items'>
            <ResultadosDeBusqueda></ResultadosDeBusqueda>
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App
