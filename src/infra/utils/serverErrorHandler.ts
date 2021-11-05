import { ErrorMessages } from '../../shared/constants/messages/ErrorMessages';
import type { ErrorRequestHandler } from 'express'
import ServerError from '../../services/utils/server-error/ServerError'
import { CelebrateError} from 'celebrate'
import { QueryFailedError } from 'typeorm';

export const errorHandler : ErrorRequestHandler = (err, req, res, next) => { 
  if(err instanceof ServerError) {
    return res.status(err.status).send({message: err.message})
  }

  if(err instanceof CelebrateError) {
    return res.status(500).send({
      name: err.message,
      message: err.message,
      details: err.details,
    })
  }
  
  if(err instanceof QueryFailedError) {
    return res.status(400).send({
      name: err.name,
      message: err.message,
      details: err.driverError.detail
    })
  }

  return res.status(500).send(ErrorMessages.SERVER_INTERNAL_ERROR)
}