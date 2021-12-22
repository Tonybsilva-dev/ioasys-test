
import { EntityRepository, Repository } from 'typeorm';
import { Permission } from '../infra/typeorm/entities/Permission';

@EntityRepository(Permission)
class PermissionRepository extends Repository<Permission>{

  public async findByName(name: string): Promise<Permission | null> {

    const findPermission = await this.findOne({
      where: { name }
    });

    return findPermission || null;
  }
}

export { PermissionRepository };