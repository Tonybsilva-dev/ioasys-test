import AppError from '@shared/errors/AppError';
import { getRepository } from "typeorm";
import { Permission } from "../infra/typeorm/entities/Permission";
import { Role } from "../infra/typeorm/entities/Role";

type RolePermissionRequest = {
  role_id: string;
  permissions: string[];
};

export class CreateRolePermissionService {
  async execute({
    role_id,
    permissions,
  }: RolePermissionRequest): Promise<Role> {

    const roleRepo = getRepository(Role);
    const permissionsRepo = getRepository(Permission)

    const role = await roleRepo.findOne(role_id);

    if (!role) {
      throw new AppError("Role does not exists!");
    }

    const permissionsExists = await permissionsRepo.findByIds(
      permissions
    );

    role.permissions = permissionsExists;

    await roleRepo.save(role);

    return role;
  }
}
