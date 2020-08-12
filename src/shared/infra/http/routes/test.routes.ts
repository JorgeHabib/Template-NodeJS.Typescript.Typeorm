import Router from 'express';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';

const testRouter = Router();

testRouter.use(ensureAuthenticated);
testRouter.get('/', (request, response) => {
  console.log(request.user);

  return response.json({ ok: true });
});

export default testRouter;
