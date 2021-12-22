import { EntityRepository, Repository } from 'typeorm';
import { Role } from '../infra/typeorm/entities/Role';

@EntityRepository(Role)
class RoleRepository extends Repository<Role>{

    public async findByName(name: string): Promise<Role | null> {

      const findRole = await this.findOne({
        where: { name }
      });

      return findRole || null;
    }
}

export { RoleRepository };