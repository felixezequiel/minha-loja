const connection = require('../../dataBase/connection')

module.exports = {
	async index (req, res) {
		const { user, pwd } = req.body
		const response = await connection('user')
			.where('user', user).andWhere('password', pwd)
			.select('*')
		if (!response.length) return res.status(404).json({ error: 'Usuario Invalido!' })
		res.status(200).json(response)
	},

	async create (req, res) {
		const { user, pwd } = req.body
		const response = await connection('user').insert({
			user: user,
			password: pwd
		})
		console.log(response);
		res.status(204).send()
	}
}