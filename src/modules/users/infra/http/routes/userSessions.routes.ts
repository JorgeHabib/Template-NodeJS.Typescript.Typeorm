import { Router } from 'express';

import UserSessionsController from '@modules/users/infra/http/controllers/UserSessionsController';

const userSessionsRouter = Router();

const sessionsController = new UserSessionsController();

userSessionsRouter.post('/', sessionsController.create);

export default userSessionsRouter;
