"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var project_cmp_1 = require("../components/project-cmp");
var projectRoutes = [
    {
        path: "projects",
        component: project_cmp_1.ProjectCmp,
        pathMatch: "full"
    }
];
exports.ProjectRouting = router_1.RouterModule.forRoot(projectRoutes);
