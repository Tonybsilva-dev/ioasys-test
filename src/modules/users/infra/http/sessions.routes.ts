import AuthenticatedUserService from '@modules/users/services/AuthenticatedUserService';
import { Request, Response, Router } from 'express';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request: Request, response: Response) => {

    const { email, password } = request.body
    const autheticateUser = new AuthenticatedUserService();

    const { user, token } = await autheticateUser.execute({
      email,
      password,
    })
    delete user.password;
    return response.json({ user, token })
});

export { sessionsRouter };
