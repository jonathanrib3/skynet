import CourseRepository from "../infra/repositories/CourseRepository";

interface IRequest {
  name: string;

  minHours: number;
}

export default class CreateCourseService {
  private courseRepository = new CourseRepository();

  public async execute({ name, minHours }: IRequest) {
    const course = await this.courseRepository.create({ name, minHours });

    return course;
  }
}
