"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var main_cmp_1 = require("../components/main-cmp");
var mainRoutes = [
    {
        path: "",
        component: main_cmp_1.MainCmp,
        pathMatch: "full"
    }
];
exports.MainRouting = router_1.RouterModule.forRoot(mainRoutes);
