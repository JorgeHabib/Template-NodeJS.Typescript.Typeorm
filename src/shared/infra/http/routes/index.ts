import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';

import userSessionsRouter from '@modules/users/infra/http/routes/userSessions.routes';

import testRouter from './test.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/userSessions', userSessionsRouter);
routes.use('/test', testRouter);

export default routes;
