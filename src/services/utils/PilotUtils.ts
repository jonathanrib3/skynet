import { IPilot } from '../../shared/interfaces'


export class PilotUtils {
  /*
  formatPilot(pilot: IPilot) {
    const formattedPilot: IPilot = {
      id: pilot.id,
      address: pilot.address.trim(),
      age: pilot.age,
      email: pilot.email.trim(),
      license: pilot.license.trim(),
      password: pilot.email.trim(),
      registration: pilot.registration.trim()
    }
    return formattedPilot
  }
  */
  isPilotValid(pilot: IPilot) {
    const {
      address,
      age,
      email,
      license,
      password,
      registration
    } = pilot

    if(address === '' || email === '' || password === '' || registration === '' || license === '') {
      return false
    }
    if(!address || !age || !email || !license || !password || !registration) {
      return false
    }
    if(age <= 0 || age >=90) {
      return false
    }
    return true
  }
}