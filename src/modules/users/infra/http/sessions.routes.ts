import { Router, Request, Response } from 'express';
import AuthenticatedUserService from '@modules/users/services/AuthenticatedUserService';

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