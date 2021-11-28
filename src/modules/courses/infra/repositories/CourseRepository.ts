import ICreateCourseDTO from "@modules/courses/dtos/ICreateCourseDTO";
import prisma from "@shared/infra/database/prisma";

export default class CourseRepository {
  private courseRepository = prisma.course;

  public async create({ name, minHours }: ICreateCourseDTO) {
    return this.courseRepository.create({
      data: {
        name,
        minHours,
      },
    });
  }

  public async findById(courseId: number) {
    return this.courseRepository.findUnique({
      where: {
        id: courseId,
      },
    });
  }

  public async list(name?: string) {
    return this.courseRepository.findMany({
      where: {
        ...(name && {
          name: {
            contains: name,
            mode: "insensitive",
          },
        }),
      },
    });
  }
}
