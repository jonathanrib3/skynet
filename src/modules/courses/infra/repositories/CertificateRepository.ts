import { Certificate } from ".prisma/client";
import prisma from "@shared/infra/database/prisma";

export default class CertificateRepository {
  private certificateRepository = prisma.certificate;

  public async create(studentId: number, courseId: number) {
    return this.certificateRepository.create({
      data: {
        studentId,
        courseId,
      },
    });
  }

  public async search({ courseId, studentId }: Partial<Certificate>) {
    return this.certificateRepository.findMany({
      where: {
        ...(courseId && { courseId }),
        ...(studentId && { studentId }),
      },
      select: {
        id: true,
        course: {
          select: {
            id: true,
            name: true,
          },
        },
        student: {
          select: {
            id: true,
            user: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }
}
