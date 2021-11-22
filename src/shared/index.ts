export { default as Client } from './abstract_classes/Client'

export * from './constants/messages/ErrorMessages'
export * from './constants/messages/SuccessfulMessages'

export { default as IAircraft } from './interfaces/IAircraft'
export { default as IAssociate } from './interfaces/IAssociate'
export { default as IClass } from './interfaces/IClass'
export { default as IFlight } from './interfaces/IFlight'

export { default as IClassToBeSaved } from 
  './interfaces/repository-objects-interfaces/IClassToBeCreated'
export { default as IClassToBeUpdated } from 
  './interfaces/repository-objects-interfaces/IClassToBeUpdated'
export { default as IAircraftToBeUpdated } from 
  './interfaces/repository-objects-interfaces/IAircraftToBeUpdated'
export { default as IAssociateToBeSaved } from 
  './interfaces/repository-objects-interfaces/IAssociateToBeCreated'
export { default as IAssociateToBeUpdated } from 
  './interfaces/repository-objects-interfaces/IAssociateToBeUpdated'
export { default as IFlightToBeSaved } from 
  './interfaces/repository-objects-interfaces/IFlightToBeCreated'
export { default as IFlightToBeUpdated } from 
  './interfaces/repository-objects-interfaces/IFlightToBeUpdated'

export { default as AssociateRole } from './enums/AssociateRole'
