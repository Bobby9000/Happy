import express from 'express'
import path from 'path'
import cors from 'cors'
import 'express-async-errors'

import './database/connection'

import routes from './routes'
import errorHandler from './errors/handler'

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..','uploads')))
app.use(errorHandler)

app.listen(3333);

// REQUISIÇÕES / RESPOSTA
// LOCALHOST:3333  

// Rota = conjunto
// Recurso = usuários
// Método HTTP = GET, PUST, PUT, DELETE
// Parâmetros 

// GET = Buscar uma informação (lista, item, etc...)
// POST = Criado uma informação
// PUT = Editar uma informação
// DELETE = Deletear uma informação

// Query Params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users/1 (identificar um recurso)
