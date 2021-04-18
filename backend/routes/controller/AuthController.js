const TokenController = require('./TokenController')

module.exports = {
	authToken(req, res) {
		const { token } = req.body
		
		const valid = TokenController.validate(token)
		console.log(valid)
		!valid.auth ? res.status(401).json(valid) : res.status(200).json(valid)
	}
}