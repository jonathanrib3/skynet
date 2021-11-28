import CertificateRepository from "../infra/repositories/CertificateRepository";

interface IRequest {
  studentId?: number;

  courseId?: number;
}

export default class ListCertificatesService {
  private certificateRepository = new CertificateRepository();

  public async execute({ studentId, courseId }: IRequest) {
    return this.certificateRepository.search({ studentId, courseId });
  }
}
