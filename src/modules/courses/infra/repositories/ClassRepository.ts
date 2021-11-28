import ICreateClassDTO from "@modules/courses/dtos/ICreateClassDTO";
import prisma from "@shared/infra/database/prisma";
import { Class } from ".prisma/client";

export default class ClassRepository {
  private classRepository = prisma.class;
  private flightRepository = prisma.flight;
  private studentRepository = prisma.student;

  public async create({
    description,
    courseId,
    flightId,
    studentId,
    instructorId,
  }: ICreateClassDTO) {
    return this.classRepository.create({
      data: {
        description,
        courseId,
        flightId,
        studentId,
        instructorId,
      },
    });
  }

  public async search({
    flightId,
    instructorId,
    studentId,
    courseId,
  }: Partial<Class>) {
    return this.classRepository.findMany({
      where: {
        ...(flightId && { flightId }),
        ...(instructorId && { instructorId }),
        ...(studentId && { studentId }),
        ...(courseId && { courseId }),
      },
      select: {
        course: true,
        id: true,
        flight: true,
        student: true,
        instructor: true,
      },
    });
  }

  public async listCourseStudentHours(courseId: number) {
    const result: Array<{
      studentId: number;
      name: string;
      flewHours: number;
    }> = await prisma.$queryRaw`
    select c."studentId", u."name",sum(f."hoursFlew") as "flewHours" from "Class" c
    inner join "Flight" f on c."flightId" = f."id"
    inner join "Student" s on s."id" = c."studentId"
    inner join "User" u on u."id" = s."userId"
    where "courseId" = ${courseId}
    group by "studentId", u."name"
    `;

    return result;
  }

  public async studentHoursByCourse(courseId: number, studentId: number) {
    const result = await this.classRepository.findMany({
      where: {
        courseId,
        studentId,
      },
      select: {
        flight: {
          select: {
            hoursFlew: true,
          },
        },
      },
    });

    let sumhours = 0;

    result.forEach((el) => (sumhours = sumhours + el.flight.hoursFlew));

    return sumhours;
  }
}
