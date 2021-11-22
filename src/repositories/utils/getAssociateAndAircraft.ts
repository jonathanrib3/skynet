import { Aircraft, Associate } from "../../database/entity";
import { getRepository } from "typeorm";


async function getAssociateAndAircraft(associateId: string, aircraftId: string) {
  const associateRepository = getRepository(Associate)
  const aircraftRepository = getRepository(Aircraft)

  const associatesAndAircrafts = {
    associates: await associateRepository
      .find({where: {id: associateId}}),
    aircrafts: await aircraftRepository
    .find({where: {id: aircraftId}})
  }
  
  const { associates, aircrafts } = associatesAndAircrafts

  return {
    associate: associates[0],
    aircraft: aircrafts[0]
  }
}

export default getAssociateAndAircraft