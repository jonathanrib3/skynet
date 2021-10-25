import { Router, Request, Response } from 'express';
import { InstructorController } from '../../../controllers';
import { celebrate, Joi, errors, Segments } from 'celebrate'

const instructorController = new InstructorController()
const instructorRouter = Router()

instructorRouter.use(errors())

instructorRouter.get('/', 
  (req: Request, res: Response) => 
    instructorController.findAll(req,res));

instructorRouter.get('/:uuid', 
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().guid()
    })
  }), 
  (req: Request, res: Response) => 
    instructorController.findById(req,res));

instructorRouter.post('/', 
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      address: Joi.string().trim().min(5).required(),
      age: Joi.number().greater(18).max(80).required(),
      courseName: Joi.string().trim().min(5).required(),
      email: Joi.string().trim().email().required(),
      graduateDate: Joi.string().trim().max(16).required(),
      instituteName: Joi.string().trim().min(5).required(),
      name: Joi.string().trim().min(5).required(),
      password: Joi.string().trim().min(6).required(),
      registration: Joi.string().trim().min(6).required()
    })
  }), 
  (req: Request, res: Response) => 
    instructorController.create(req,res));
    
instructorRouter.patch('/:uuid', 
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().guid()
    }),
    [Segments.BODY]: Joi.object().keys({
      address: Joi.string().trim().min(5).optional(),
      age: Joi.number().greater(18).max(80).optional(),
      courseName: Joi.string().trim().min(5).optional(),
      email: Joi.string().trim().email().optional(),
      graduateName: Joi.string().trim().max(16).optional(),
      instituteName: Joi.string().trim().min(5).optional(),
      name: Joi.string().trim().min(5).optional(),
      password: Joi.string().trim().min(6).optional(),
      registration: Joi.string().trim().min(6).optional()
    })
  }), 
  (req: Request, res: Response) => 
    instructorController.update(req,res));

instructorRouter.delete('/:uuid', 
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().guid()
    })
  }),
  (req: Request, res: Response) => 
    instructorController.delete(req,res));



export default instructorRouter