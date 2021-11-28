import { Class } from ".prisma/client";
import ClassRepository from "../infra/repositories/ClassRepository";

export default class ListClassService {
  private classRepository = new ClassRepository();

  public async execute({
    studentId,
    flightId,
    courseId,
    instructorId,
  }: Partial<Class>) {
    const courses = await this.classRepository.search({
      studentId,
      flightId,
      courseId,
      instructorId,
    });

    return courses;
  }
}
