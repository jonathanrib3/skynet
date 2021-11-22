import { Flight } from '../database/entity';
import { IFlight } from '../shared';
import { getRepository } from "typeorm";
import { createFlightObjectToBeSaved, createFlightObjectToBeUpdated, getAssociateAndAircraft } from './utils';


export default class FlightRepository {
  
  private flightRepository = getRepository(Flight)

  async findAllFlights() {

    const flights = await this.flightRepository.find()

    return flights
  }

  async findFlightById(id: string) {

    const flight = await this.flightRepository.find({where: {id:id}})

    return flight
  }

  async createFlight(newFlightData: IFlight) {
    const { associate, aircraft } = 
      await getAssociateAndAircraft(newFlightData.associateId, newFlightData.aircraftId)

    return await this.flightRepository
      .save(await createFlightObjectToBeSaved(associate, aircraft, newFlightData))
  }

  async updateFlight(id: string, dataToBeUpdated: IFlight) {

    return await this.flightRepository
      .update(id, await createFlightObjectToBeUpdated(id, dataToBeUpdated))
  }

  async deleteFlight(id: string) {

    const deleteResult = await this.flightRepository.delete(id)

    return deleteResult
  }
}