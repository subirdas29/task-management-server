// import QueryBuilder from "../../builder/QueryBuilder";
import { ITask } from "./Task.interface";
import Task from "./Task.model";




const createTask = async (payload:ITask) => {
 const result = await Task.create(payload)
 return result
};

//all tasks for everyone
// const getAllTasks = async (query: Record<string, unknown>) => {




//   const taskQuery = new QueryBuilder(
//     task.find().populate({
//       path: 'taskProvider',
//       populate: { path: 'userId' }
//     }),
//     query
//   )
//     .search(['name', 'category'])
//     .filter()
//     .sort()
//     .paginate()
//     .fields()

//   const result = await taskQuery.modelQuery.lean();
//   const meta = await taskQuery.countTotal();

//   return {
//     result,
//     meta,
//   };
// };




export const taskService = {
    createTask,
    // getAllTasks,
}