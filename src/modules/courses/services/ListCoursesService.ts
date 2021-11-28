import CourseRepository from "../infra/repositories/CourseRepository";

interface IRequest {
  name?: string;
}

export default class ListCoursesService {
  private courseRepository = new CourseRepository();

  public async execute({ name }: IRequest) {
    const courses = await this.courseRepository.list(name);

    return courses;
  }
}
