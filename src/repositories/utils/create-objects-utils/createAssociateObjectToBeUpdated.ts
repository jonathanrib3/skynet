import { getRepository } from 'typeorm';
import { Associate } from "database/entity";
import { ErrorMessages, IAssociate, IAssociateToBeUpdated } from 'shared';
import ServerError from 'server-error/ServerError';

const repo = getRepository(Associate)

 async function createAssociateObjectToBeUpdated(id: string,newAssociateData: IAssociate) {

    const previousData = await repo.findByIds(id as any)

    if(previousData.length === 0) {
      throw new ServerError(ErrorMessages.CLASS_NOT_FOUND, 400)
    }

    const newAssociateObject: IAssociateToBeUpdated = {
      address: (!newAssociateData.address)
        ? previousData[0].address
        : newAssociateData.address,
      age: (!newAssociateData.age)
        ? previousData[0].age
        : newAssociateData.age,
      courseName: (!newAssociateData.courseName)
        ? previousData[0].courseName
        : newAssociateData.courseName,
      email: (!newAssociateData.email)
        ? previousData[0].email
        : newAssociateData.email,
      graduateDate: (!newAssociateData.graduateDate)
        ? previousData[0].graduateDate
        : newAssociateData.graduateDate,
      instituteName: (!newAssociateData.instituteName)
        ? previousData[0].instituteName
        : newAssociateData.instituteName,
      isApproved: (!newAssociateData.isApproved)
        ? previousData[0].isApproved
        : newAssociateData.isApproved,
      license: (!newAssociateData.license)
        ? previousData[0].license
        : newAssociateData.license,
      name: (!newAssociateData.name)
        ? previousData[0].name
        : newAssociateData.name,
      password: (!newAssociateData.password)
        ? previousData[0].password
        : newAssociateData.password,
      totalFlewHours: (!newAssociateData.totalFlewHours)
        ? previousData[0].totalFlewHours
        : newAssociateData.totalFlewHours,
    }

    return newAssociateObject
}

export default createAssociateObjectToBeUpdated