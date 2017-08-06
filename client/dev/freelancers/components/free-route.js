"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var free_cmp_1 = require("../components/free-cmp");
var freeRoutes = [
    {
        path: "freelancers",
        component: free_cmp_1.FreeCmp,
        pathMatch: "full"
    }
];
exports.FreeRouting = router_1.RouterModule.forRoot(freeRoutes);
