import { Router } from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router()
const upload = multer(uploadConfig)

// Padrão MVC

// Model - Representação de um dado
// Views - Como as coisas são visualizadas 
// Controller - Logica das rotas 

routes.get('/orphanages', OrphanagesController.index); 
routes.get('/orphanages/:id', OrphanagesController.show); 
routes.post('/orphanages', upload.array('images'), OrphanagesController.create) 
export default routes;