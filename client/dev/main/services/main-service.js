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
require("rxjs/add/operator/map");
var conf_service_1 = require("../../common/services/conf-service");
var MainService = (function () {
    function MainService(_confService) {
        this._confService = _confService;
    }
    /*
    * GET MAIN JOB CATEGORY LIST
    * URL:    [hostserver]/api/common/confui/JOB_MAIN_CATEGORY/
    * METHOD: GET
    * PARAMS: {}
    * RETURN: Observable
    * */
    MainService.prototype.getMainJobCategory = function () {
        return this._confService.getConfUIList('JOB_MAIN_CATEGORY');
    };
    MainService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [conf_service_1.ConfService])
    ], MainService);
    return MainService;
}());
exports.MainService = MainService;
