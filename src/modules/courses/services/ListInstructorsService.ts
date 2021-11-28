import UserRepository from "@modules/users/infra/repositories/UserRepository";

interface IRequest {}

export default class ListInstructorsService {
  private userRepository = new UserRepository();

  public async execute() {
    const instructors = this.userRepository.listInstructors();

    return instructors;
  }
}
