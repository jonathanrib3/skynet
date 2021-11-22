import { Class } from 'database/entity';
import { getRepository } from 'typeorm';
import { ErrorMessages, IClass} from 'shared';
import ServerError from 'server-error/ServerError';
import { 
  getAssociatesAndAircrafts,
  createClassObjectToBeUpdated,
  createClassObjectToBeSaved } from './utils';


export default class ClassService {

  private classRepository = getRepository(Class)
  
  async findAllClasses() {
    const classes = await this.classRepository
      .find({relations: ['aircrafts','associate']})

    return classes
  }

  async findClassById(id: string) {
    return await this.classRepository
      .find({where: {id: id}, relations: ['aircrafts','associate']})
  }

  async createClass(newClassData: IClass) {
    const { associates, aircrafts } = 
      await getAssociatesAndAircrafts(newClassData.associatesIds, newClassData.aircraftsIds)

    if(associates.length === 0|| aircrafts.length === 0) {
        throw new ServerError(ErrorMessages.RELATIONSHIP_ERROR, 400)
    }

    return await this.classRepository
      .save(await createClassObjectToBeSaved(associates, aircrafts, newClassData))  
  }

  async updateClass(id: string, dataToBeUpdated: IClass) {
    if(!dataToBeUpdated) {
      throw new ServerError(ErrorMessages.NULL_OBJECT_ERROR, 400)
    }

    return await this.classRepository
      .update(id, await createClassObjectToBeUpdated(id, dataToBeUpdated))
  }

  async deleteClass(id: string) {
    const deleteResult = await this.classRepository.delete(id)

    return deleteResult
  }
} 