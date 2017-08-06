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
var menu_service_1 = require("../services/menu-service");
var common_service_1 = require("../../common/services/common-service");
var MenuCmp = (function () {
    function MenuCmp(_menuService, _commonService) {
        this._menuService = _menuService;
        this._commonService = _commonService;
    }
    MenuCmp.prototype.ngOnInit = function () {
        // 초기 실행
        this._init();
    };
    MenuCmp.prototype._init = function () {
        var _this = this;
        // get main logo path
        this.getMainLogoPath().then(function (logoPath) {
            _this.mainLogoPath = logoPath;
        });
    };
    MenuCmp.prototype.getMainLogoPath = function () {
        return this._commonService
            .getLogoPath();
    };
    MenuCmp = __decorate([
        core_1.Component({
            selector: "menu-cmp",
            template: "<div></div>"
        }),
        __metadata("design:paramtypes", [menu_service_1.MenuService, common_service_1.CommonService])
    ], MenuCmp);
    return MenuCmp;
}());
exports.MenuCmp = MenuCmp;
