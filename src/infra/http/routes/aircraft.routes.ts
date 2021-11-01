import { Router, Request, Response } from 'express';
import { AircraftController } from '../../../controllers';
import { celebrate, Joi, Segments } from 'celebrate'

const aircraftController = new AircraftController()
const aircraftRouter = Router()


aircraftRouter.get('/',
  (req: Request, res: Response) => 
    aircraftController.findAll(req,res));

aircraftRouter.get('/:uuid', 
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().guid()
    })
  }), 
  (req: Request, res: Response) => 
    aircraftController.findById(req,res));

aircraftRouter.post('/', 
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      callSign: Joi.string().trim().min(5).required(),
      model: Joi.string().trim().min(5).required(),
      flewHours: Joi.number().required()
    })
  }), 
  (req: Request, res: Response) => 
    aircraftController.create(req,res));

aircraftRouter.patch('/:uuid', 
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().guid()
    }),
    [Segments.BODY]: Joi.object().keys({
      callSign: Joi.string().trim().min(5).optional(),
      model: Joi.string().trim().min(5).optional(),
      flewHours: Joi.number().optional()
    })
  }), 
  (req: Request, res: Response) => 
    aircraftController.update(req,res));

aircraftRouter.delete('/:uuid', 
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().guid()
    })
  }), 
  (req: Request, res: Response) => 
    aircraftController.delete(req,res));




export default aircraftRouter