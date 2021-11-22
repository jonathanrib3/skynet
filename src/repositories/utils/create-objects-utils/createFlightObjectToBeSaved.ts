import { Aircraft, Associate } from "database/entity";
import { IFlight, IFlightToBeSaved } from 'shared';


function createFlightObjectToBeSaved(associate: Associate, aircraft: Aircraft, newFlightData: IFlight) {
  const newFlightObject: IFlightToBeSaved = {
    aircraft: aircraft,
    associate: associate,
    flewHours: newFlightData.flewHours,
  }

  return newFlightObject
}

export default createFlightObjectToBeSaved