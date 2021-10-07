import { Student, Instructor, Aircraft } from "../../database/entity";

export interface IClass {
  id: string;
  instructorId: Instructor;
  studentId: Student;
  aircraftId: Aircraft;
  description: string;
  flewHours: number;
  isSolo: boolean;
  endTime: string;
  startTime: string;
}