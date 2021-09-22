import { Aircraft } from './../entity/Aircraft';
import { getRepository } from "typeorm";


const AircraftRepository = getRepository(Aircraft)

export default AircraftRepository