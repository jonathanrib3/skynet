
import { AircraftController, PilotController, InstructorController, StudentController, ClassController } from '../../controllers'
import { Router, Request, Response } from 'express'

const aircraftController = new AircraftController()
const pilotController = new PilotController()
const instructorController = new InstructorController()
const studentController = new StudentController()
const classController = new ClassController()

const routes = Router()

routes.get('/aircraft', (req: Request, res: Response) => aircraftController.findAll(req,res))
routes.post('/aircraft', (req: Request, res: Response) => aircraftController.create(req,res))

routes.get('/pilot', (req: Request, res: Response) => pilotController.findAll(req,res))
routes.post('/pilot', (req: Request, res: Response) => pilotController.create(req,res))

routes.get('/instructor', (req: Request, res: Response) => instructorController.findAll(req,res))
routes.post('/instructor', (req: Request, res: Response) => instructorController.create(req,res))

routes.get('/student', (req: Request, res: Response) => studentController.findAll(req,res))
routes.post('/student', (req: Request, res: Response) => studentController.create(req,res))

routes.get('/class', (req: Request, res: Response) => classController.findAll(req,res))
routes.post('/class', (req: Request, res: Response) => classController.create(req,res))

export default routes