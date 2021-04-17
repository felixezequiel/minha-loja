const connection = require('../../dataBase/connection')
const TokenController = require('./TokenController')

module.exports = {
	async index (req, res) {
		const { user, pwd } = req.body
		const response = await connection('user')
			.where('user', user).andWhere('password', pwd)
			.select('*')
		if (!response.length) return res.status(404).json({ message: 'Invalid user!' })
		
		const token = TokenController.create(user, pwd)
		res.status(200).json({ user, pwd, token })
	},

	async create (req, res) {
		const { user, pwd } = req.body
		const response = await connection('user').insert({
			user: user,
			password: pwd
		})
		if (!response.length) return res.status(500).json({ message: 'Unexpected user creation error' })
		res.status(204).send()
	}
}