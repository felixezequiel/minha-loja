require('dotenv').config()
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

module.exports = {
	create(user, pwd) {
		return jwt.sign({
			user, pwd
		}, secret)
	},

	validate(token) {
		if (!token) return { message: 'Token not informed', auth: false }
		jwt.verify(token, secret, erro => erro ? 
			{ 
				message: 'without permission', 
				auth: false 
			} : 
			{ 
				message: 'Authorized', 
				auth: true 
			}
		)
	}
}