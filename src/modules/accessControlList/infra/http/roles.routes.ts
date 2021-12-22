import { CreateRolePermissionService } from '@modules/accessControlList/services/CreateRolePermissionService';
import { CreateRoleService } from '@modules/accessControlList/services/CreateRoleService';
import ensureAuthenticated from '@shared/middlewares/ensureAuthenticated';
import { Request, Response, Router } from 'express';


const rolesRouter = Router();

rolesRouter.post('/', ensureAuthenticated, async (request: Request, response: Response) => {

  const { name, description } = request.body;

  const createRole = new CreateRoleService();

  const role = await createRole.execute({ name, description })

  return response.json(role)

})


rolesRouter.post('/:role_id', ensureAuthenticated, async (request: Request, response: Response) => {

  const { role_id } = request.params;
  const { permissions } = request.body

  const createRolePermission = new CreateRolePermissionService();

  const rolePermission = await createRolePermission.execute({ role_id, permissions })

  return response.json(rolePermission)

})

export { rolesRouter };
