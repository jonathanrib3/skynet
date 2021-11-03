import { IPilot } from 'src/shared';
import { hashPassword } from "..";

async function createPostPilotObject(newPilotData: IPilot) {

    const newPilotObject: IPilot = {
      address: newPilotData.address,
      age: newPilotData.age,
      email: newPilotData.email,
      license: newPilotData.license,
      name: newPilotData.name,
      password: await hashPassword(newPilotData.password),
      registration: newPilotData.registration
    }

    return newPilotObject
}

export default createPostPilotObject