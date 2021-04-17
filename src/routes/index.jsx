import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CadastroUsuario } from '../components/cadastroUsuario';
import { Login } from '../components/login';

export default function Routes () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={ Login } />
        <Route path='/cadastro-usuario' exact component={ CadastroUsuario } />
      </Switch>
    </Router>
  )
}