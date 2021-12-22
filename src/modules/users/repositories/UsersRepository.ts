import User from '../infra/typeorm/entities/User';
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(User)
class UsersRepository extends Repository<User> {

  public async findByName(name: string): Promise<User | null> {

    const findUser = await this.findOne({
      where: { name },
    });

    return findUser || null;
  }
}
export default UsersRepository;