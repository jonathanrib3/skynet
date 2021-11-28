import { Request, Response } from "express";

import CreateClassService from "@modules/courses/services/CreateClassService";
import ListClassService from "@modules/courses/services/ListClassService";

export default class ClassController {
  public async store(request: Request, response: Response) {
    const {
      description,
      courseId,
      studentId,
      instructorId,
      hoursFlew,
      aircraftId,
    } = request.body;

    const createClass = new CreateClassService();

    const flightClass = await createClass.execute({
      description,
      courseId,
      studentId,
      instructorId,
      hoursFlew,
      aircraftId,
    });

    return response.json(flightClass);
  }

  public async show(request: Request, response: Response) {
    const { courseId, flightId, studentId, instructorId } = request.query;

    const listClasses = new ListClassService();

    const classes = await listClasses.execute({
      courseId: Number(courseId),
      flightId: Number(flightId),
      studentId: Number(studentId),
      instructorId: Number(instructorId),
    });

    return response.json({ classes });
  }
}
