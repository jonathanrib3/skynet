import { AssociateRole, IAircraft, IAssociate, IClass, IFlight } from "shared";

export const associateMock: IAssociate = {
  address: 'Rua Aquidaban',
  age: 19,
  courseName: 'Aviação Civil',
  email: 'abattoir@gmail.com',
  graduateDate: '2021-09-21',
  instituteName: 'UAM',
  isApproved: false,
  license: '190-209-1234',
  name: 'UOOOOOOOOOOOOOOOOOOOU',
  password: '123pass',
  totalFlewHours: 0,
  role: AssociateRole.STUDENT
}

export const aircraftMock: IAircraft = {
  callSign: 'XLR-8',
  flewHours: 20,
  model: 'SEILAKK',
}

export const flightMock: IFlight = {
  aircraftId: '828935d1-4951-4441-a55d-b1980ceea98d',
  associateId: '8530f523-2d82-42ee-8adc-b7ccedb471ac',
  flewHours: 2,
}

export const classMock: IClass = {
  aircraftsIds : ['828935d1-4951-4441-a55d-b1980ceea98d'],
  associatesIds : ['8530f523-2d82-42ee-8adc-b7ccedb471ac'],
  description : 'aula sobre bombardeio',
  endDate : '2021-09-21',
  flewHours : 10,
  id : '',
  isSolo: false,
  startDate: '2021-09-21',
}
// export const classMock: IClass = {

// }

// export const flightMock: IFlight = {

// }
