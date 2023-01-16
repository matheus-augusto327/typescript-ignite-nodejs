import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createSource(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "NodeJS",
    educator: "Dani",
    duration: 10,
  });

  return response.send();
}
