import { Router, Request, Response } from 'express';
import { PilotController } from '../../../controllers';
import { celebrate, Joi, errors, Segments } from 'celebrate'

const pilotController = new PilotController()
const pilotRouter = Router()

pilotRouter.use(errors())

pilotRouter.get('/', 
  (req: Request, res: Response) => 
    pilotController.findAll(req,res));
pilotRouter.get('/:uuid', 
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().guid()
    })
  }), 
  (req: Request, res: Response) => 
    pilotController.findById(req,res));

pilotRouter.post('/', 
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      address: Joi.string().trim().min(5).required(),
      age: Joi.number().greater(18).max(80).required(),
      email: Joi.string().trim().email().required(),
      license: Joi.string().trim().min(6).required(),
      name: Joi.string().trim().min(5).required(),
      password: Joi.string().trim().min(6).required(),
      registration: Joi.string().trim().min(6).required()
    })
  }), 
  (req: Request, res: Response) => 
    pilotController.create(req,res));

pilotRouter.patch('/:uuid', 
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().guid()
    }),
    [Segments.BODY]: Joi.object().keys({
      address: Joi.string().trim().min(6).optional(),
      age: Joi.number().greater(18).max(80).optional(),
      email: Joi.string().trim().email().optional(),
      license: Joi.string().trim().min(6).optional(),
      name: Joi.string().trim().min(5).optional(),
      password: Joi.string().trim().min(6).optional(),
      registration: Joi.string().trim().min(6).optional()
    })
  }), 
  (req: Request, res: Response) => 
    pilotController.update(req,res));

pilotRouter.delete('/:uuid', 
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().guid()
    })
  }), 
  (req: Request, res: Response) => 
    pilotController.delete(req,res));




export default pilotRouter