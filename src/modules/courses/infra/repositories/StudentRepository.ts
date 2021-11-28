import prisma from "@shared/infra/database/prisma";

export default class StudentRepository {
  private studentRepository = prisma.student;

  public async create(userId: number) {
    return this.studentRepository.create({
      data: {
        userId,
      },
    });
  }
}
