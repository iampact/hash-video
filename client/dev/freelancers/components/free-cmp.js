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
var free_service_1 = require("../services/free-service");
var FreeCmp = (function () {
    function FreeCmp(_freeService) {
        this._freeService = _freeService;
        // default setting
    }
    FreeCmp.prototype.ngOnInit = function () {
        // 초기 실행
        this._init();
    };
    FreeCmp.prototype._searchFreelances = function (params) {
        // TODO: filter 처리
        this._freeService
            .searchFreelances(params)
            .subscribe(function (result) {
            console.log(result);
        });
    };
    FreeCmp.prototype._init = function () {
        this._searchFreelances({
            keyword: "*"
        });
    };
    // search main contents
    FreeCmp.prototype.search = function (formData) {
        // TODO: form filter 구성
        var keyword = formData.keyword;
        var searchParam = {
            keyword: keyword
        };
        // do search
        this._searchFreelances(searchParam);
    };
    FreeCmp = __decorate([
        core_1.Component({
            selector: "free-cmp",
            templateUrl: "freelancers/templates/free.html",
            styleUrls: ["freelancers/styles/free.css"]
        }),
        __metadata("design:paramtypes", [free_service_1.FreeService])
    ], FreeCmp);
    return FreeCmp;
}());
exports.FreeCmp = FreeCmp;
