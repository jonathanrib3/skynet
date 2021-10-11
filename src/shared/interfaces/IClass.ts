import { Student, Instructor, Aircraft } from "../../database/entity";

export interface IClass {
  id: string;
  instructorId: string;
  studentId: string;
  aircraftId: string;
  description: string;
  flewHours: number;
  isSolo: boolean;
  endTime: string;
  startTime: string;
}