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
var session_service_1 = require("../../common/services/session-service");
var _ = require("lodash/lodash.js");
var router_1 = require("@angular/router");
var MenuCmp = (function () {
    function MenuCmp(_menuService, _commonService, _sessionService, _router) {
        this._menuService = _menuService;
        this._commonService = _commonService;
        this._sessionService = _sessionService;
        this._router = _router;
    }
    MenuCmp.prototype.ngOnInit = function () {
        var _this = this;
        // 초기 실행
        this._init();
        this.currentUser = this._sessionService.getCurrentUser();
        this.isLogined = this._sessionService.isLogined();
        // current session change handler
        this._sessionService.currentSessionChange.subscribe(function (user) {
            _this.currentUser = user;
            _this.isLogined = !_.isNull(_this.currentUser);
        });
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
    // logout
    MenuCmp.prototype.logoutUser = function () {
        var _this = this;
        // logout
        this._sessionService.logout().subscribe(function (result) {
            // 구현해야함
            //console.log('Logout Success', result.plain());
            localStorage.removeItem('access_token');
            _this._sessionService.deleteCurrentUser();
            _this._commonService.openCommonModal("로그아웃", result.data.message, 'info', 2000).afterClosed()
                .subscribe(function (result) {
                _this._router.navigateByUrl('/');
            });
        });
    };
    MenuCmp = __decorate([
        core_1.Component({
            selector: "menu-cmp",
            template: "<div></div>"
        }),
        __metadata("design:paramtypes", [menu_service_1.MenuService,
            common_service_1.CommonService,
            session_service_1.SessionService,
            router_1.Router])
    ], MenuCmp);
    return MenuCmp;
}());
exports.MenuCmp = MenuCmp;
//# sourceMappingURL=menu-cmp.js.map