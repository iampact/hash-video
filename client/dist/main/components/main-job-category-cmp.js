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
var main_service_1 = require("../services/main-service");
var MainJobCategoryCmp = (function () {
    function MainJobCategoryCmp(_mainService) {
        this._mainService = _mainService;
        this.gridCols = 3;
        this.gridRowHeight = '2:1.5';
    }
    MainJobCategoryCmp.prototype.ngOnInit = function () {
        // 초기 실행
        this._init();
    };
    MainJobCategoryCmp.prototype.jobCategoryClick = function (item) {
        // TODO: 해당 category로 이동
        console.log(item);
    };
    // get job category
    MainJobCategoryCmp.prototype._getJobCategory = function () {
        var _this = this;
        this._mainService
            .getMainJobCategory()
            .subscribe(function (result) {
            _this.mainJobCategory = result.plain();
        });
    };
    MainJobCategoryCmp.prototype._init = function () {
        this._getJobCategory();
    };
    MainJobCategoryCmp = __decorate([
        core_1.Component({
            selector: "main-job-category-cmp",
            templateUrl: "main/templates/main.job.category.html",
            styleUrls: ["main/styles/main.job.category.css"]
        }),
        __metadata("design:paramtypes", [main_service_1.MainService])
    ], MainJobCategoryCmp);
    return MainJobCategoryCmp;
}());
exports.MainJobCategoryCmp = MainJobCategoryCmp;
