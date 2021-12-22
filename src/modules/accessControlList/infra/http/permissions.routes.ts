import { CreatePermissionService } from '@modules/accessControlList/services/CreatePermissionService';
import ensureAuthenticated from '@shared/middlewares/ensureAuthenticated';
import { Request, Response, Router } from 'express';


const permissionsRouter = Router();

permissionsRouter.post('/', ensureAuthenticated, async (request: Request, response: Response) => {

  const { name, description } = request.body;

  const createPermission = new CreatePermissionService();

  const product = await createPermission.execute({ name, description })

  return response.json(product)

})

export { permissionsRouter };
