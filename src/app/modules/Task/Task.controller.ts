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

const oneTaskController =
catchAsync(async (req, res) => {

  const {taskId} = req.params;

  const result = await taskService.oneTaskDetails(taskId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Task fetched successfully",
    data: result,
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

  const result = await taskService.taskDelete(taskId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task deleted successfully',
    data: result,
  });
});

export const TaskController = {
  taskController,
  oneTaskController,
  getAllTaskController,
  updateTaskController,
  deleteTaskController,
};
