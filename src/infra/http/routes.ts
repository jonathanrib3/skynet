import { AircraftController, PilotController } from '../../controllers'
import { Router, Request, Response } from 'express'

const aircraftController = new AircraftController()
const pilotController = new PilotController()

const routes = Router()

routes.get('/aircraft', (req: Request, res: Response) => aircraftController.findAll(req,res))
routes.post('/aircraft', (req: Request, res: Response) => aircraftController.create(req,res))
routes.get('/pilot', (req: Request, res: Response) => pilotController.findAll(req,res))
routes.post('/pilot', (req: Request, res: Response) => pilotController.create(req,res))

export default routes