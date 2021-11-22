import { aircraftMock, associateMock, classMock, flightMock } from './mock';
import { AircraftRepository, AssociateRepository, ClassRepository, FlightRepository } from 'repositories'
import ConnectionClass from '../../database/ConnectionClass'
import {createConnection, Connection, getConnectionManager, getRepository} from "typeorm";
import { connectionPoolConfig } from 'database/db_connection_config';
import "reflect-metadata";
import { Aircraft, Associate, Class, Flight } from 'database/entity';

const connectionClass = new ConnectionClass()
const connectionManager = getConnectionManager()
// async function seilaporra() {
//   console.log('bati na função')
//   await connectionClass.connectDefault().then(async() => {
//     console.log(connectionClass.hasConnection())
//     console.log(connectionClass.getDefaultConnection())
//     import('./server')

//   }).catch(error => console.log(error))  
// }

async function seilaporra(){
  
  await connectionManager.create(connectionPoolConfig)

  await connectionManager.get('default').connect().then(async () => {
    const associateRepo = getRepository(Associate)
    const aircraftRepo = getRepository(Aircraft)
    const seFODAAA = getRepository(Class)
    const seFODAA3 = getRepository(Flight)

    const foundAircraft = await aircraftRepo.find({where: {id: flightMock.aircraftId}})
    const foundAssociate = await associateRepo.find({where: {id: flightMock.associateId}})
    
    //await associateRepo.save(associateMock)
    //await aircraftRepo.save(aircraftMock)
    // await seFODAA3.save({
    //   aircraft: foundAircraft[0],
    //   associate: foundAssociate[0],
    //   flewHours: flightMock.flewHours
    // })
    await seFODAAA.save({
      aircrafts: foundAircraft,
      associates: foundAssociate,
      description : 'aula sobre bombardeio',
      endDate : '2021-09-21',
      flewHours : 10,
      id : '',
      isSolo: false,
      startDate: '2021-09-21',
    })
    console.log(`${foundAssociate[0]}\n${foundAircraft[0]}`)
  }).catch(error => console.log(error))

    
    console.log(connectionClass.getDefaultConnection())
  
  
  
  
  

  ;

  

}

 seilaporra()
