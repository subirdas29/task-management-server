import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

import httpStatus from 'http-status';
import { taskService } from './Task.service';

const taskController = catchAsync(async (req, res) => {
  const result = await taskService.createTask(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Tasks created successfully',
    data: result,
  });
});

const getAllTaskController = catchAsync(async (req, res) => {
  const query = req.query;

  const result = await taskService.getAllTasks(query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tasks fetched successfully',
    meta: result.meta,
    data: result.result,
  });
});

const updateTaskController = catchAsync(async (req, res) => {
  const {
    params: { taskId },
  } = req;

  const result = await taskService.taskStatus(taskId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task status updated successfully',
    data: result,
  });
});

const deleteTaskController = catchAsync(async (req, res) => {
  const {
    params: { taskId },
  } = req;

  await taskService.taskDelete(taskId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task deleted successfully',
    data: null,
  });
});

export const TaskController = {
  taskController,
  getAllTaskController,
  updateTaskController,
  deleteTaskController,
};
