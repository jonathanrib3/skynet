import CreateCourseService from "@modules/courses/services/CreateCourseService";
import ListCoursesService from "@modules/courses/services/ListCoursesService";
import StudentCourseHoursService from "@modules/courses/services/StudentCourseHoursService";
import { Request, Response } from "express";

export default class CoursesController {
  public async store(request: Request, response: Response) {
    const { name, minHours } = request.body;

    const createCourse = new CreateCourseService();

    const course = await createCourse.execute({ name, minHours });

    return response.json(course);
  }

  public async show(request: Request, response: Response) {
    const { name } = request.query;

    const createCourse = new ListCoursesService();

    const courses = await createCourse.execute({ name: name as string });

    return response.json({ courses });
  }

  public async studentHours(request: Request, response: Response) {
    const { courseId } = request.params;

    const studentHours = new StudentCourseHoursService();

    const hours = await studentHours.execute({ courseId: Number(courseId) });

    return response.json({ hours });
  }
}
