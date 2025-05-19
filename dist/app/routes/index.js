"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Task_routes_1 = require("../modules/Task/Task.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/task',
        route: Task_routes_1.TaskRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
