import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CadastroUsuario } from '../components/cadastroUsuario';
import { ControleEstoque } from '../components/controleEstoque';
import { GerenciadorCategorias } from '../components/gerenciadorCategorias';
import { Home } from '../components/home';
import { Login } from '../components/login';
import { PrivateRoute } from '../components/privateRoute';
import { Vendas } from '../components/vendas';

export default function Routes () {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={ Login } />
        <Route path='/cadastro-usuario' exact component={ CadastroUsuario } />
        <PrivateRoute path='/home' component={ Home } />
        <PrivateRoute path='/gerenciador-de-categorias' component={ GerenciadorCategorias } />
        <PrivateRoute path='/vendas' component={ Vendas } />
        <PrivateRoute path='/controle-de-estoque' component={ ControleEstoque } />
      </Switch>
    </Router>
  )
}