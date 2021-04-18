import { useContext } from "react"
import { Redirect, Route } from "react-router"
import { Auth } from "../../Provider/auth"

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const [authorization] = useContext(Auth)
  
  return (
    <Route exact { ...rest }>
      {authorization.auth ? <Component /> : <Redirect to='/' />}
    </Route>
  )
}