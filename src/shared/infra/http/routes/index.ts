import { accessControlRouter } from '@modules/accessControlList/infra/http/accessControl.routes';
import { permissionsRouter } from '@modules/accessControlList/infra/http/permissions.routes';
import { rolesRouter } from '@modules/accessControlList/infra/http/roles.routes';
import { productsRouter } from '@modules/products/infra/http/products.routes';
import { sessionsRouter } from '@modules/users/infra/http/sessions.routes';
import { userRouter } from '@modules/users/infra/http/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/users', userRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/roles', rolesRouter)
routes.use('/permissions', permissionsRouter)
routes.use('/access_control', accessControlRouter)
routes.use('/products', productsRouter)

export default routes;
