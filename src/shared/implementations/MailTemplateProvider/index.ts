import fs from "fs";
import handlebars from "handlebars";
import { promisify } from "util";
import IParseMailTemplateDTO from "./dtos/IParseMailTemplateDTO";

export default class MailTemplateProvider {
  public async parse({
    file,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const templateFileContent = await promisify(fs.readFile)(file, {
      encoding: "utf-8",
    });

    const parseTemplate = handlebars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}
