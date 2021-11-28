import { Request, Response } from "express";

import CreateCertificateService from "@modules/courses/services/CreateCertificateService";
import ListCertificatesService from "@modules/courses/services/ListCertificatesService";

export default class CertificateController {
  public async store(request: Request, response: Response) {
    const { courseId, studentId } = request.body;

    const createCerticate = new CreateCertificateService();

    const certificate = await createCerticate.execute({
      courseId,
      studentId,
    });

    return response.json(certificate);
  }

  public async show(request: Request, response: Response) {
    const { courseId, studentId } = request.params;

    const listCertificates = new ListCertificatesService();

    const certificates = await listCertificates.execute({
      studentId: Number(studentId),
      courseId: Number(courseId),
    });

    return response.json({ certificates });
  }
}
