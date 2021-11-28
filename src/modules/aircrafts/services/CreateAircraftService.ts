import AircraftRepository from "../infra/repositories/AircraftRepository";

interface IRequest {
  model: string;

  callSign: string;

  flewHours?: number;
}

export default class CreateAircraftSerivce {
  private aircraftRepository = new AircraftRepository();

  public async execute({ model, callSign, flewHours }: IRequest) {
    const aircraft = await this.aircraftRepository.create({
      model,
      callSign,
      flewHours,
    });

    return aircraft;
  }
}
