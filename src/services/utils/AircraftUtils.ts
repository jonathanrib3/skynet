import { IAircraft } from '../../shared/interfaces';
import { Aircraft } from '../../database/entity';

export class AircraftUtils {

  formatAircraft(aircraft: IAircraft) {
    const formattedAircraft: IAircraft = {
      id: aircraft.id,
      callSign: aircraft.callSign.trim(),
      flewHours: aircraft.flewHours,
      model: aircraft.model.trim()  
    }
    return formattedAircraft
  }

  isAircraftValid(aircraft: IAircraft) {
    const {
      callSign,
      flewHours,
      model
    } = aircraft

    if(callSign === '' || model === '') {
      return false
    }
    if(!callSign || !flewHours || !model) {
      return false
    }
    if(flewHours < 0) {
      return false
    }
    return true
  }
} 