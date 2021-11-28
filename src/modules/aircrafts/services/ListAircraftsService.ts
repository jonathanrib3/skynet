import AircraftRepository from "../infra/repositories/AircraftRepository";

interface IRequest {
  callSign?: string;
}

export default class ListAircraftsService {
  private aircraftRepository = new AircraftRepository();

  public async execute({ callSign }: IRequest) {
    const aircrafts = await this.aircraftRepository.all();

    return aircrafts;
  }
}
