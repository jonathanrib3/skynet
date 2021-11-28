import ICreateAircraftDTO from "@modules/aircrafts/dtos/ICreateAircraftDTO";
import prisma from "@shared/infra/database/prisma";

export default class AircraftRepository {
  private aircraftRepository = prisma.aircraft;

  public async create({ callSign, model, flewHours }: ICreateAircraftDTO) {
    return this.aircraftRepository.create({
      data: {
        callSign,
        model,
        flewHours: flewHours || 0,
      },
    });
  }

  public async all() {
    return this.aircraftRepository.findMany();
  }
}
