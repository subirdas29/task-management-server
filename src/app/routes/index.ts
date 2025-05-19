import { Router } from 'express';

import { TaskRoutes } from '../modules/Task/Task.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/task',
    route: TaskRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
