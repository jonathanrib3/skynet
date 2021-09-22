import { Class } from './../entity/Class';
import { getRepository } from "typeorm";


const ClassRepository = getRepository(Class)

export default ClassRepository