import { getLocation } from '@controller/GeoLocationController'
import { Router } from 'express'

const routes = Router()

routes.post('/location', getLocation)

export default routes
