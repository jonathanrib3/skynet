import { Aircraft } from 'database/entity';
import { IAircraft } from 'shared';
import { getRepository, Like } from 'typeorm';


export default class FindRepository{
  
  private aircraftRepository = getRepository(Aircraft)

  async findAllAircrafts(take: number, skip: number) {

    const [ result, total ] = await this.aircraftRepository.findAndCount({
      take: take,
      skip: skip
    })

    return {
      aircrafts: result,
      count: total
    }
  }
  
  async findAircraftById(take:number, skip:number, id: string) {

    const [result, total] = await this.aircraftRepository.findAndCount({
      where: { id: id },
      take: take,
      skip: skip
    })

    return {
      aircraft: result,
      count: total
    }
  }

  async findAircraftsByModel(take:number, skip:number, model: string) {

    const [result, total] = await this.aircraftRepository.findAndCount({
      where: { model: Like(`% ${model} %`)}, order: {model: 'DESC'},
      take: take,
      skip: skip
    })

    return {
      aircrafts: result,
      count: total
    }
  }

  async findAircraftByCallSign(take:number, skip:number, callSign: string) {

    const [result, total] = await this.aircraftRepository.findAndCount({
      where: { callSign: callSign },
      take: take,
      skip: skip
    })

    return {
      aircraft: result,
      count: total
    }
  }
}