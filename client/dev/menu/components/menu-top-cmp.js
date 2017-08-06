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
var material_1 = require("@angular/material");
var login_modal_cmp_1 = require("../../common/components/login-modal-cmp");
var MenuTopCmp = (function (_super) {
    __extends(MenuTopCmp, _super);
    function MenuTopCmp(_menuService, _commonService, dialog) {
        var _this = _super.call(this, _menuService, _commonService) || this;
        _this.dialog = dialog;
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
    MenuTopCmp = __decorate([
        core_1.Component({
            selector: "menu-top-cmp",
            templateUrl: "menu/templates/menu.top.html",
            styleUrls: ["menu/styles/menu.top.css"],
        }),
        __metadata("design:paramtypes", [menu_service_1.MenuService,
            common_service_1.CommonService,
            material_1.MdDialog])
    ], MenuTopCmp);
    return MenuTopCmp;
}(menu_cmp_1.MenuCmp));
exports.MenuTopCmp = MenuTopCmp;
