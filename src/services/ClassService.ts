import { Student, Instructor, Aircraft, Class} from '../database/entity';
import { getRepository } from 'typeorm';
import { ErrorMessages, SuccessfulMessages, IClassInputDataModel} from '../shared';
import { ServerError, createPostClassObject, createPatchClassObject } from './utils';

export class ClassService {

  private classRepository = getRepository(Class)
  private studentRepository = getRepository(Student)
  private instructorRepository = getRepository(Instructor)
  private aircraftRepository = getRepository(Aircraft)

  async findAllClasses() {

    const classes = await this.classRepository
      .find({relations: ['aircrafts','instructors','students']})

    if(!classes) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    if(classes.length === 0) {
      throw new ServerError(ErrorMessages.EMPTY_CLASS_TABLE, 400)
    }  

    return classes
  }

  async findClassById(id: string) {
    
    return await this.classRepository
      .find({where: {id: id}, relations: ['aircrafts','instructors','students']})
  }

  /*
    Método que cria uma classe com aluno(s), instrutor(es) e aeronave(s). 
    Como ela tem relações many-to-many com instructor, student
    e aircraft, ele primeiro busca os dados pertinentes às 
    entidades pra realizar o relacionamento entre elas.
  */
  async createClass(newClassData: IClassInputDataModel) {
    const students = await this.studentRepository
      .findByIds(newClassData.studentsIds)
    
    const instructors = await this.instructorRepository
      .findByIds(newClassData.instructorsIds) 

    const aircrafts = await this.aircraftRepository
      .findByIds(newClassData.aircraftsIds)
    
    if(!newClassData) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    if(students.length === 0 || 
       instructors.length === 0 || aircrafts.length === 0) {
        throw new ServerError(ErrorMessages.RELATIONSHIP_ERROR, 400)
    }

    return await this.classRepository
      .save(await createPostClassObject(students, instructors, aircrafts, newClassData))  
  }

  async updateClass(id: string, dataToBeUpdated: IClassInputDataModel) {

    if(!dataToBeUpdated) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    return await this.classRepository
      .update(id, await createPatchClassObject(id, dataToBeUpdated))
  }

  async deleteClass(id: string) {

    const deleteResult = await this.classRepository.delete(id)

    if(!deleteResult) {
      throw new ServerError(ErrorMessages.UNKNOWN_DELETE_ERROR, 400)
    }

    if(deleteResult.affected === 0) {
      throw new ServerError(ErrorMessages.ID_DELETE_ERROR, 400)
    }
    
    return SuccessfulMessages.CLASS_DELETE_SUCCESSFUL
  }
} 