import prisma from "@shared/infra/database/prisma";
import ICreateFlightDTO from "@modules/aircrafts/dtos/ICreateFlightDTO";

export default class FlightRepository {
  private flightRepository = prisma.flight;

  public async create({
    hoursFlew,
    coPilotId,
    pilotId,
    aircraftId,
  }: ICreateFlightDTO) {
    return this.flightRepository.create({
      data: {
        hoursFlew,
        coPilotId,
        pilotId,
        aircraftId,
      },
    });
  }
}
