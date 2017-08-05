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
var ngx_restangular_1 = require("ngx-restangular");
var ConfService = (function () {
    function ConfService(restangular) {
        this.restangular = restangular;
        this._commonRestService = this.restangular.all('common');
    }
    /*
    * GET CONF
    * URL:    [hostserver]/api/common/conf/{category}/{key}/
    * METHOD: GET
    * PARAMS: {category: string, key: string}
    * RETURN: Observable
    * */
    ConfService.prototype.getConf = function (category, key) {
        return this._commonRestService.all('conf').one(category, key).get();
    };
    /*
    * GET CONF LIST
    * URL:    [hostserver]/api/common/conf/{category}/
    * METHOD: GET
    * PARAMS: {category: string}
    * RETURN: Observable
    * */
    ConfService.prototype.getConfList = function (category) {
        return this._commonRestService.all('conf').one(category).getList();
    };
    /*
    * GET CONFUI LIST
    * URL:    [hostserver]/api/common/confui/{item}/
    * METHOD: GET
    * PARAMS: {item: string}
    * RETURN: Observable
    * */
    ConfService.prototype.getConfUIList = function (item) {
        return this._commonRestService.all('confui').one(item).getList();
    };
    ConfService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ngx_restangular_1.Restangular])
    ], ConfService);
    return ConfService;
}());
exports.ConfService = ConfService;
