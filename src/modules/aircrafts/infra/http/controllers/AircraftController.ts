import CreateAircraftSerivce from "@modules/aircrafts/services/CreateAircraftService";
import ListAircraftsService from "@modules/aircrafts/services/ListAircraftsService";
import { Request, Response } from "express";

export default class AircraftController {
  public async store(request: Request, response: Response) {
    const { model, callSign, flewHours } = request.body;

    const createAircraft = new CreateAircraftSerivce();

    const aircraft = await createAircraft.execute({
      model,
      callSign,
      flewHours,
    });

    return response.json(aircraft);
  }

  public async show(request: Request, response: Response) {
    const { callSign } = request.query;

    const listAircraft = new ListAircraftsService();

    const aircrafts = await listAircraft.execute({
      callSign: callSign as string,
    });

    return response.json({ aircrafts });
  }
}
