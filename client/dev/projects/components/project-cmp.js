"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var project_service_1 = require("../services/project-service");
var ProjectCmp = (function () {
    function ProjectCmp(_projectService) {
        this._projectService = _projectService;
        // default setting
    }
    ProjectCmp.prototype.ngOnInit = function () {
        // 초기 실행
        this._init();
    };
    ProjectCmp.prototype._searchProjects = function (params) {
        // TODO: filter 처리
        this._projectService
            .searchProjects(params)
            .subscribe(function (result) {
            console.log(result);
        });
    };
    ProjectCmp.prototype._init = function () {
        this._searchProjects({
            keyword: "*"
        });
    };
    // search main contents
    ProjectCmp.prototype.search = function (formData) {
        // TODO: form filter 구성
        var keyword = formData.keyword;
        var searchParam = {
            keyword: keyword
        };
        // do search
        this._searchProjects(searchParam);
    };
    ProjectCmp = __decorate([
        core_1.Component({
            selector: "project-cmp",
            templateUrl: "projects/templates/project.html",
            styleUrls: ["projects/styles/project.css"]
        }),
        __metadata("design:paramtypes", [project_service_1.ProjectService])
    ], ProjectCmp);
    return ProjectCmp;
}());
exports.ProjectCmp = ProjectCmp;
