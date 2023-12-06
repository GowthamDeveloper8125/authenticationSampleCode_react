import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/about" component={About} />
        <ProtectedRoute component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
