import { Route } from "react-router"

export const PrivateRoute = ({ component: Component, ...rest }) => {
  
  return (
    <Route exact { ...rest }>

    </Route>
  )
}