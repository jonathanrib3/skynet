export default interface IClass {
  id: string;
  associatesIds: string[];
  aircraftsIds: string[];
  description: string;
  flewHours: number;
  isSolo: boolean;
  endDate: string;
  startDate: string;
}

