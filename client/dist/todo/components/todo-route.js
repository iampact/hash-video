"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var todo_cmp_1 = require("../components/todo-cmp");
var todoRoutes = [
    {
        path: "todo",
        component: todo_cmp_1.TodoCmp,
        pathMatch: "full"
    }
];
exports.TodoRouting = router_1.RouterModule.forRoot(todoRoutes);
