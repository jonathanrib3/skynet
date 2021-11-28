import ServerError from "@shared/errors/ServerError";
import CertificateRepository from "../infra/repositories/CertificateRepository";
import ClassRepository from "../infra/repositories/ClassRepository";
import CourseRepository from "../infra/repositories/CourseRepository";

interface IRequest {
  studentId: number;
  courseId: number;
}

export default class CreateCertificateService {
  private certificateRepository = new CertificateRepository();
  private classRepository = new ClassRepository();
  private courseRepository = new CourseRepository();

  public async execute({ studentId, courseId }: IRequest) {
    const course = await this.courseRepository.findById(courseId);

    if (!course) {
      throw new ServerError("Curso nao encontrado");
    }

    const studentHours = await this.classRepository.studentHoursByCourse(
      courseId,
      studentId
    );

    if (studentHours < course.minHours) {
      throw new ServerError(
        "O aluno nao possui as horas minimas para gerar o certificado."
      );
    }

    return this.certificateRepository.create(studentId, courseId);
  }
}
