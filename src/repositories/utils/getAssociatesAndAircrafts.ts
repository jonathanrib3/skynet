import { Aircraft, Associate } from "../../database/entity";
import { getRepository } from "typeorm";


async function getAssociatesAndAircrafts(associatesIds: string[], aircraftsIds: string[]) {
  const associateRepository = getRepository(Associate)
  const aircraftRepository = getRepository(Aircraft)

  const associatesAndAircrafts = {
    associates: await associateRepository
      .findByIds(associatesIds),
    aircrafts: await aircraftRepository
      .findByIds(aircraftsIds)
  }
  
  return associatesAndAircrafts
}

export default getAssociatesAndAircrafts