import { Router } from 'express';

import infoRouter from '@modules/cases/infra/http/info.routes';

const routes = Router();

routes.use('/info', infoRouter);

export default routes;