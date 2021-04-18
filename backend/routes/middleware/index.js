const TokenController = require('../controller/TokenController')

module.exports = {
	verifyUser(req, res, next) {
		const token = req.body.headers.authorization

		const valid = TokenController.validate(token)

		return !valid.auth ? res.status(401).json(valid) : next()

	}
}