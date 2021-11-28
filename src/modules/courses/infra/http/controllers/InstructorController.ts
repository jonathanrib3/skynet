import { Request, Response } from "express";

import ListInstructorsService from "@modules/courses/services/ListInstructorsService";

export default class InstructorController {
  public async show(request: Request, response: Response) {
    const listInstructors = new ListInstructorsService();

    const instructors = await listInstructors.execute();

    return response.json({ instructors });
  }
}
