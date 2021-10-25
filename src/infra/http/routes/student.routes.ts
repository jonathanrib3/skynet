import { Router, Request, Response } from 'express';
import { StudentController } from '../../../controllers';
import { celebrate, Joi, errors, Segments } from 'celebrate'

const studentController = new StudentController()
const studentRouter = Router()

studentRouter.use(errors())

studentRouter.get('/', 
  (req: Request, res: Response) => 
    studentController.findAll(req,res));

studentRouter.get('/:uuid', 
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().guid()
    })
  }), 
  (req: Request, res: Response) => 
    studentController.findById(req,res));

studentRouter.post('/', 
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      address: Joi.string().trim().min(5).required(),
      age: Joi.number().greater(18).max(80).required(),
      email: Joi.string().trim().email().required(),
      isApproved: Joi.boolean().required(),
      name: Joi.string().trim().min(5).required(),
      password: Joi.string().trim().min(6).required(),
      registration: Joi.string().trim().min(6).required()
    })
  }), 
  (req: Request, res: Response) => 
    studentController.create(req,res));

studentRouter.patch('/:uuid', 
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().guid()
    }),
    [Segments.BODY]: Joi.object().keys({
      address: Joi.string().trim().min(5).optional(),
      age: Joi.number().greater(18).max(80).optional(),
      email: Joi.string().trim().email().optional(),
      isApproved: Joi.boolean().optional(),
      name: Joi.string().trim().min(5).optional(),
      password: Joi.string().trim().min(6).optional(),
      registration: Joi.string().trim().min(6).optional()
    })
  }), 
  (req: Request, res: Response) => 
    studentController.update(req,res));

studentRouter.delete('/:uuid', 
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().guid()
    })
  }), 
  (req: Request, res: Response) => 
    studentController.delete(req,res));


export default studentRouter