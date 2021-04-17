const UserController = require('./controller/UserController')

module.exports = routes => {
	routes.post('/login', UserController.index)
	routes.post('/cadastrar', UserController.create)
}