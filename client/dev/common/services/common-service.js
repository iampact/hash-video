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
var ngx_restangular_1 = require("ngx-restangular");
var conf_service_1 = require("./conf-service");
var _ = require("lodash/lodash.js");
var material_1 = require("@angular/material");
var common_modal_cmp_1 = require("../components/common-modal-cmp");
var CommonService = (function () {
    function CommonService(restangular, _confService, dialog) {
        this.restangular = restangular;
        this._confService = _confService;
        this.dialog = dialog;
        this._commonRestService = this.restangular.all('common');
    }
    /*
    * GET LOGO PATH
    * PARAMS: {}
    * RETURN: Promise
    * */
    CommonService.prototype.getLogoPath = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._confService.getConf('@WEB_UI_GLOBAL', 'LogoFile')
                .subscribe(function (result) {
                var plain = result.plain();
                if (_.isArray(plain) && plain.length === 1) {
                    resolve(plain[0].CONF_VALUE);
                }
                else {
                    reject(new Error('not found logo path'));
                }
            });
        });
    };
    /*
    * OPEN COMMON MODAL
    * PARAMS: {title:string, contents:any, type:string}
    * RETURN: MdDialogRef<CommonModalCmp>
    * */
    CommonService.prototype.openCommonModal = function (title, contents, type, autoCloseTime) {
        if (autoCloseTime === void 0) { autoCloseTime = 0; }
        var config = new material_1.MdDialogConfig();
        var dialogRef = this.dialog.open(common_modal_cmp_1.CommonModalCmp, config);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.contents = contents;
        dialogRef.componentInstance.type = type;
        if (autoCloseTime > 0) {
            // auto close
            setTimeout(function () {
                dialogRef.close();
            }, autoCloseTime);
        }
        return dialogRef;
    };
    CommonService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ngx_restangular_1.Restangular,
            conf_service_1.ConfService,
            material_1.MdDialog])
    ], CommonService);
    return CommonService;
}());
exports.CommonService = CommonService;
//# sourceMappingURL=common-service.js.map