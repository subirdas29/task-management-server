import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { ITask } from './Task.interface';
import Task from './Task.model';
import httpStatus from 'http-status';

const createTask = async (payload: ITask) => {
   
  const result = await Task.create(payload);
  return result;
};

//all tasks for everyone
const getAllTasks = async (query: Record<string, unknown>) => {
  const taskQuery = new QueryBuilder(Task.find(), query)
    // .search()
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await taskQuery.modelQuery.lean();
  const meta = await taskQuery.countTotal();

  return {
    result,
    meta,
  };
};

//single order
const oneTaskDetails = async (taskId: string) => {
  
  const result = await Task.findById(taskId)

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Task is not found");
  }
  return result
 
};

const taskStatus = async (taskId: string) => {
    const task = await Task.findById(taskId);

    if(!task){
        throw new AppError(httpStatus.NOT_FOUND, "Task is not found");
    }

    const newStatus = task.status === "Completed"? "Pending" : "Completed"

  const result = await Task.findByIdAndUpdate(
    taskId,
    {
      status: newStatus,
    },
    {
      new: true,
    },
  );
  return result;
};

const taskDelete = async (taskId: string) => {
  const result = await Task.findByIdAndDelete(taskId);
  return result;
};

export const taskService = {
  createTask,
  getAllTasks,
  oneTaskDetails,
  taskStatus,
  taskDelete,
};
