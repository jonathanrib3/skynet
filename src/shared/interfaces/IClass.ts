import { Student, Instructor, Aircraft, Pilot } from "../../database/entity";

export interface IClassInputDataModel {
  id: string;
  instructorsIds: string[];
  studentsIds: string[];
  aircraftsIds: string[];
  pilotsIds: string[];
  description: string;
  flewHours: number;
  isSolo: boolean;
  endDate: string;
  startDate: string;
}

export interface IClassOutputDataModel {
  id: string;
  instructors: Instructor[];
  students: Student[];
  aircrafts: Aircraft[];
  pilot: Pilot;
  description: string;
  flewHours: number;
  isSolo: boolean;
  endDate: string;
  startDate: string;
}