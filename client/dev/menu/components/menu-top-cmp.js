"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var menu_cmp_1 = require("./menu-cmp");
var menu_service_1 = require("../services/menu-service");
var common_service_1 = require("../../common/services/common-service");
var session_service_1 = require("../../common/services/session-service");
var material_1 = require("@angular/material");
var login_modal_cmp_1 = require("../../common/components/login-modal-cmp");
var router_1 = require("@angular/router");
var MenuTopCmp = (function (_super) {
    __extends(MenuTopCmp, _super);
    function MenuTopCmp(_menuService, _commonService, _sessionService, _router, dialog) {
        var _this = _super.call(this, _menuService, _commonService, _sessionService, _router) || this;
        _this.dialog = dialog;
        _this.isUserMenuUsing = false;
        _this.REPEAT_TIME = 1000;
        return _this;
    }
    // open login dialog
    MenuTopCmp.prototype.openLoginDialog = function () {
        var dialogRef = this.dialog.open(login_modal_cmp_1.LoginModalCmp);
        dialogRef.afterClosed()
            .subscribe(function (result) {
            // TODO: 어떤 버튼을 클릭했는데 결과
            console.log(result);
        });
    };
    // open user menu
    MenuTopCmp.prototype.openUserMenu = function () {
        var THIS = this;
        var menuBtnEl = this.userMenuBtn.nativeElement;
        $(menuBtnEl).addClass('selected');
        $(menuBtnEl).off('mouseenter');
        $(menuBtnEl).on('mouseenter', function () {
            THIS.isUserMenuUsing = true;
        });
        // TODO: mouse가 위에 있는데 mouseleave가 호출되는 문제가 있음
        $(menuBtnEl).off('mouseleave');
        $(menuBtnEl).on('mouseleave', function () {
            THIS.isUserMenuUsing = false;
            THIS.checkUsingMenu();
        });
        this.isUserMenuUsing = true;
        this.trigger.openMenu();
    };
    MenuTopCmp.prototype.closeUserMenu = function () {
        this.trigger.closeMenu();
    };
    MenuTopCmp.prototype.checkUsingMenu = function () {
        var THIS = this;
        setTimeout(function () {
            if (THIS.isUserMenuUsing === false) {
                THIS.closeUserMenu();
            }
            else {
                // 재귀 호출
                THIS.checkUsingMenu();
            }
        }, this.REPEAT_TIME);
    };
    MenuTopCmp.prototype.addUserMenuOpenEvent = function () {
        var THIS = this;
        // open 상태에서 mouse leave 이벤트 on add
        var menuEl = $('div.' + this.userMenu._elementRef.nativeElement.classList[0]);
        $(menuEl).off('mouseenter');
        $(menuEl).on('mouseenter', function () {
            THIS.isUserMenuUsing = true;
        });
        $(menuEl).off('mouseleave');
        $(menuEl).on('mouseleave', function () {
            THIS.isUserMenuUsing = false;
            THIS.closeUserMenu();
        });
        this.isUserMenuUsing = true;
        // 열리고 일정시간이 지났는데도 isUserMenuUsing 이 false면 닫는다
        // this.userMenu 에 마우스 이벤트를 걸어 over면 isUserMenuUsing true, leave면 false처리
        this.checkUsingMenu();
    };
    MenuTopCmp.prototype.addUserMenuCloseEvent = function () {
        // user menu close event
        $(this.userMenuBtn.nativeElement).removeClass('selected');
    };
    // open user info or move user info
    MenuTopCmp.prototype.userInfo = function () {
        console.log(this.currentUser);
        // TODO: open user info or move user info
    };
    __decorate([
        core_1.ViewChild(material_1.MdMenuTrigger),
        __metadata("design:type", material_1.MdMenuTrigger)
    ], MenuTopCmp.prototype, "trigger", void 0);
    __decorate([
        core_1.ViewChild('userMenuBtn'),
        __metadata("design:type", core_1.ElementRef)
    ], MenuTopCmp.prototype, "userMenuBtn", void 0);
    __decorate([
        core_1.ViewChild('userMenu'),
        __metadata("design:type", Object)
    ], MenuTopCmp.prototype, "userMenu", void 0);
    MenuTopCmp = __decorate([
        core_1.Component({
            selector: "menu-top-cmp",
            templateUrl: "menu/templates/menu.top.html",
            styleUrls: ["menu/styles/menu.top.css"],
        }),
        __metadata("design:paramtypes", [menu_service_1.MenuService,
            common_service_1.CommonService,
            session_service_1.SessionService,
            router_1.Router,
            material_1.MdDialog])
    ], MenuTopCmp);
    return MenuTopCmp;
}(menu_cmp_1.MenuCmp));
exports.MenuTopCmp = MenuTopCmp;
