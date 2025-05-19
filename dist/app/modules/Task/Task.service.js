"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskService = void 0;
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const Task_model_1 = __importDefault(require("./Task.model"));
const http_status_1 = __importDefault(require("http-status"));
const createTask = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Task_model_1.default.create(payload);
    return result;
});
//all tasks for everyone
const getAllTasks = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const taskQuery = new QueryBuilder_1.default(Task_model_1.default.find(), query)
        // .search()
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield taskQuery.modelQuery.lean();
    const meta = yield taskQuery.countTotal();
    return {
        result,
        meta,
    };
});
//single order
const oneTaskDetails = (taskId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Task_model_1.default.findById(taskId);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Task is not found");
    }
    return result;
});
const taskStatus = (taskId) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield Task_model_1.default.findById(taskId);
    if (!task) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Task is not found");
    }
    const newStatus = task.status === "Completed" ? "Pending" : "Completed";
    const result = yield Task_model_1.default.findByIdAndUpdate(taskId, {
        status: newStatus,
    }, {
        new: true,
    });
    return result;
});
const taskDelete = (taskId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Task_model_1.default.findByIdAndDelete(taskId);
    return result;
});
exports.taskService = {
    createTask,
    getAllTasks,
    oneTaskDetails,
    taskStatus,
    taskDelete,
};
