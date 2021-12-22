import { CreateUserAccessControlListService } from '@modules/accessControlList/services/CreateUserAccessControlList';
import ensureAuthenticated from '@shared/middlewares/ensureAuthenticated';
import { Response, Router } from 'express';

const accessControlRouter = Router();

accessControlRouter.post('/', ensureAuthenticated, async (request: any , response: Response) => {

  const  user_id = request.user.id;
  const { roles, permissions } = request.body;

  const createACL = new CreateUserAccessControlListService();

  const user_ACL = await createACL.execute(
    {
      id: user_id,
      roles,
      permissions
    });

  return response.json(user_ACL);

})

export { accessControlRouter };
