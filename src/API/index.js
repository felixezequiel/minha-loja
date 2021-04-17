import axios from 'axios'
const host = 'http://localhost:3030'

export const reqLogin = (user, pwd) => axios.post(host + '/login', { user, pwd })

export const insertUsuario = (user, pwd) => axios.post(host + '/cadastrar', { user, pwd })