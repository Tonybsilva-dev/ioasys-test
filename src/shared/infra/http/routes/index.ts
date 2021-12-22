import { sessionsRouter } from '@modules/users/infra/http/sessions.routes';
import { userRouter } from '@modules/users/infra/http/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/users', userRouter)
routes.use('/sessions', sessionsRouter)

export default routes;