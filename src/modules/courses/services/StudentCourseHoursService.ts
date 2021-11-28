import ClassRepository from "../infra/repositories/ClassRepository";

interface IRequest {
  courseId: number;
}

export default class StudentCourseHoursService {
  private classRepository = new ClassRepository();

  public async execute({ courseId }: IRequest) {
    const hours = await this.classRepository.listCourseStudentHours(courseId);

    return hours;
  }
}
