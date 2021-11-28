import prisma from "@shared/infra/database/prisma";

export default class StudentRepository {
  private studentRepository = prisma.student;

  public async studentHours() {}
}
