/*
Aqui adicionaremos tanto a role como uma permission para o usuário
*/

import { User } from "@modules/users/infra/typeorm/entities/User";
import AppError from "@shared/errors/AppError";
import { getRepository } from "typeorm";
import { Permission } from "../infra/typeorm/entities/Permission";
import { Role } from "../infra/typeorm/entities/Role";

interface IUserACLRequest {
  id: string;
  roles: string[];
  permissions: string[];
}

class CreateUserAccessControlListService {
  async execute({ id, roles, permissions }: IUserACLRequest): Promise<User> {
    // Buscamos o repositório
    const userRepository = getRepository(User);
    const permissionsRepository = getRepository(Permission);
    const rolesRepository = getRepository(Role);

    const user = await userRepository.findOne({
      where: { id },
    });

    // Verificamos se o usuário existe
    if (!user) {
      throw new AppError("User does not exists", 404);
    }
    // Capturamos os objetos utilizando os id's para cadastrar as roles e a permission
    const permisionsExists = await permissionsRepository.findByIds(permissions);
    const rolesExists = await rolesRepository.findByIds(roles);

    // Aqui oque ele encontrar de roles e permissions será salvo dentro do nosso objeto
    user.permissions = permisionsExists;
    user.roles = rolesExists;

    // Salvamos nosso usuário
    userRepository.save(user);

    return user;
  }
}

export { CreateUserAccessControlListService };
