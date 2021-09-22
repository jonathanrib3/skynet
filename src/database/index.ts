import { config } from 'dotenv'
import path from 'path'
import { SuccessfulMessages } from "../shared/constants/messages/SuccessfulMessages";
import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";


config( {
  path: path.resolve(__dirname, 'database.env')
})
console.log(process.env.POSTGRES_USER)
createConnection().then(async connection => {

  console.log(SuccessfulMessages.DATABASE_CONNECTION_SUCCESSFUL)
  /*
  const pilot = new Pilot();

  pilot.age = 33
  pilot.address = 'R. Aquidaban, 766'
  pilot.email = 'gmail@gmail.com'
  pilot.license = 'seilakkkk'
  pilot.password = '1235'
  pilot.registration = 'aaaaaaaaaa'
  //pilot.userType = userType.PILOT
  
  const pilotRepo = getRepository(Pilot)
  await pilotRepo.save(pilot)

  console.log('Terminou')
  */
  

}).catch(error => console.log(error));
