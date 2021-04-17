const express = require('express')
const routes = require('./routes')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors({
    origin: '*',
    methods: '*'
}))
routes(app)
app.listen(3030, () => console.log('Servidor rodando na porta 3030'))