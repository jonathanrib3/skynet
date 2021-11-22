import { Aircraft, Associate } from "database/entity";

export default interface IFlightToBeCreated {
  flewHours: number;
  aircraft: Aircraft;
  associate: Associate;
}