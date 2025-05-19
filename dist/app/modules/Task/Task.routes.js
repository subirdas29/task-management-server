"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Task_controller_1 = require("./Task.controller");
const router = express_1.default.Router();
router.post('/', Task_controller_1.TaskController.taskController);
router.get('/alltasks', Task_controller_1.TaskController.getAllTaskController);
router.get('/taskdetails/:taskId', Task_controller_1.TaskController.oneTaskController);
router.patch('/taskstatus/:taskId', Task_controller_1.TaskController.updateTaskController);
router.delete('/:taskId', Task_controller_1.TaskController.deleteTaskController);
exports.TaskRoutes = router;
