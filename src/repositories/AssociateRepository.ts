import { Associate } from '../database/entity';
import { IAssociate } from '../shared';
import { getRepository, QueryBuilder } from "typeorm";
import { createAssociateObjectToBeUpdated } from './utils';



export default class AssociateRepository {
  
  private associateRepository = getRepository(Associate)

  async findAllAssociates(take: number, skip: number) {
    const [result, total] = await this.associateRepository.findAndCount({
      take: take,
      skip: skip,
    })

    return {
      associates: result,
      count: total
    }
  }

  async findAssociateById(id: string) {

    const associate = await this.associateRepository.find({where: {id:id}})

    return associate
  }

  async createAssociate(newAssociate: IAssociate) {

    return await this.associateRepository.save(newAssociate)
  }

  async updateAssociate(id: string, dataToBeUpdated: IAssociate) {

    return await this.associateRepository
      .update(id, await createAssociateObjectToBeUpdated(id, dataToBeUpdated))
  }

  async deleteAssociate(id: string) {

    const deleteResult = await this.associateRepository.delete(id)

    return deleteResult
  }
}