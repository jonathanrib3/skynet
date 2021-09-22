import { Pilot } from './../entity/Pilot'
import { getRepository } from 'typeorm'


const PilotRepository = getRepository(Pilot)

export default PilotRepository