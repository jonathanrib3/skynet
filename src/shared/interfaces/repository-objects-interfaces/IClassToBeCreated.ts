import { Aircraft, Associate } from "database/entity";


export default interface IClassToBeSaved {
  associates: Associate[];
  aircrafts: Aircraft[];
  description: string;
  flewHours: number;
  isSolo: boolean;
  endDate: string;
  startDate: string;
}