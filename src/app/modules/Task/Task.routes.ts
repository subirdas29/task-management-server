import express from 'express';
import { TaskController } from './Task.controller';

const router = express.Router();

router.post('/', TaskController.taskController);

router.get('/alltasks', TaskController.getAllTaskController);
router.get('/taskdetails/:taskId', TaskController.oneTaskController);

router.patch('/taskstatus/:taskId', TaskController.updateTaskController);
router.delete('/:taskId', TaskController.deleteTaskController);

export const TaskRoutes = router;
