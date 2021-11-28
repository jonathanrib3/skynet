import FlightRepository from "@modules/aircrafts/infra/repositories/FlightRepository";
import ClassRepository from "../infra/repositories/ClassRepository";

interface IRequest {
  description: string;
  courseId: number;
  studentId: number;
  instructorId: number;
  aircraftId: number;
  hoursFlew: number;
}

export default class CreateClassService {
  private classRepository = new ClassRepository();
  private flightRepository = new FlightRepository();

  public async execute({
    description,
    courseId,
    studentId,
    instructorId,
    hoursFlew,
    aircraftId,
  }: IRequest) {
    const flight = await this.flightRepository.create({
      hoursFlew,
      aircraftId,
      pilotId: instructorId,
      coPilotId: studentId,
    });

    console.log({
      description,
      courseId,
      studentId,
      instructorId,
      hoursFlew,
      aircraftId,
    });

    const flightClass = await this.classRepository.create({
      description,
      courseId,
      flightId: flight.id,
      studentId,
      instructorId,
    });

    return flightClass;
  }
}
