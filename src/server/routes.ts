import AircraftController from '../controllers/AircraftController'
import { Router, Request, Response } from 'express'

const aircraftController = new AircraftController()

const routes = Router()

routes.get('/aircraft', (req: Request, res: Response) => aircraftController.findAllAircrafts(req,res))
routes.post('/aircraft', (req: Request, res: Response) => aircraftController.createAircraft(req,res))

export default routes