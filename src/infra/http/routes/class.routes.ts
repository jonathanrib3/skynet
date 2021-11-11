import { Router, Request, Response } from 'express'
import { ClassController } from '@controllers/'
import { celebrate, Joi, Segments } from 'celebrate'
import authentication from '../middlewares/authentication'

const classController = new ClassController()
const classRouter = Router()


classRouter.get(
  '/', 
  (req: Request, res: Response) => 
    classController.findAll(req,res));

classRouter.get(
  '/:uuid', 
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().guid()
    })
  }), 
  (req: Request, res: Response) => 
    classController.findById(req,res));

classRouter.post(
  '/',
  //authentication, 
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      description: Joi.string().trim().min(5).required(),
      endDate: Joi.string().trim().max(16).required(),
      flewHours: Joi.number().greater(0).max(8).required(),
      isSolo: Joi.boolean().required(),
      startDate: Joi.string().trim().max(16).required(),
      aircraftsIds: Joi.array().required(),
      instructorsIds: Joi.array().required(),
      studentsIds: Joi.array().required()
    })
  }), 
  (req: Request, res: Response) => 
    classController.create(req,res));

classRouter.patch(
  '/:uuid',
  authentication, 
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().guid()
    }),
    [Segments.BODY]: Joi.object().keys({
      description: Joi.string().trim().min(5).optional(),
      endDate: Joi.string().trim().max(16).optional(),
      flewHours: Joi.number().greater(0).max(8).optional(),
      isSolo: Joi.boolean().optional(),
      startDate: Joi.string().trim().max(16).optional()
    })
  }), 
  (req: Request, res: Response) => 
    classController.update(req,res));

classRouter.delete('/:uuid',
  authentication,
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().guid()
    })
  }), 
  (req: Request, res: Response) => 
    classController.delete(req,res));


export default classRouter