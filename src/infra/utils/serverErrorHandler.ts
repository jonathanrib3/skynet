import { ErrorMessages } from '../../shared/constants/messages/ErrorMessages';
import type { ErrorRequestHandler } from 'express'
import ServerError from '../../services/utils/ServerError'
import { CelebrateError} from 'celebrate'


export const errorHandler : ErrorRequestHandler = (err, req, res, next) => { 
  if(err instanceof ServerError) {
    return res.status(err.status).send({message: err.message})
  }
  if(err instanceof CelebrateError) {
    return res.status(500).send({
      message: err.message,
      name: err.message,
      details: err.details,
    })
  }

  return res.status(500).send(ErrorMessages.SERVER_INTERNAL_ERROR)
}