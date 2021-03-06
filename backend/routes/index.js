const UserController = require('./controller/UserController')
const AuthController = require('./controller/AuthController')

module.exports = routes => {
	routes.post('/login', UserController.index)
	routes.post('/user-exists', UserController.userExixts)
	routes.post('/cadastrar', UserController.create)
	routes.post('/validate-token', AuthController.authToken)
}