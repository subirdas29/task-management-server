import express from 'express';
import { TaskController } from './Task.controller';







const router = express.Router();

router.post('/',TaskController.taskController);

router.get('/alltasks', TaskController.getAllTaskController);



export const TaskRoutes = router;
