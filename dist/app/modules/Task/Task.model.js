"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// models/task.model.ts
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Completed'],
        default: 'Pending',
    },
}, {
    timestamps: true,
});
const Task = (0, mongoose_1.model)('Task', TaskSchema);
exports.default = Task;
