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
var session_service_1 = require("../services/session-service");
var common_service_1 = require("../services/common-service");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var LoginModalCmp = (function () {
    function LoginModalCmp(sessionService, commonService, dialogRef, router) {
        this.sessionService = sessionService;
        this.commonService = commonService;
        this.dialogRef = dialogRef;
        this.router = router;
        // default setting
        this.loginModalForm = {
            loginName: "",
            loginPassword: ""
        };
    }
    LoginModalCmp.prototype.login = function (loginData) {
        var _this = this;
        // login
        this.sessionService.login(loginData)
            .subscribe(function (result) {
            //console.log('Login Success', result);
            // result.data.access_token 을 request.header에 넣어서 request 때 마다 전송한다
            localStorage.setItem('access_token', result.data.access_token);
            // set current user data
            _this.sessionService.setCurrentUser(result.data.user);
            // 화면 이동 - main 으로
            _this.commonService.openCommonModal("로그인 성공", result.data.user.USER_NAME + "님 어서오세요.", 'info', 2000).afterClosed()
                .subscribe(function (result) {
                // self 창 닫기
                _this.dialogRef.close();
                _this.router.navigateByUrl('/');
            });
        }, function (error) {
            // error 표시
            _this.commonService.openCommonModal("로그인 에러", error.data.data.message, 'error').afterClosed()
                .subscribe(function (result) {
                // TODO: 로그인 메인 화면으로 이동
                //console.log(result);
            });
        });
    };
    // 외부 계정 연동 login
    LoginModalCmp.prototype.externalLogin = function (target) {
        // TODO: facebook sdk를 이용한 방법으로 처리해도 됨
        // angular2 facebook sdk - https://www.npmjs.com/package/ng2-facebook-sdk
        // 새창에서 passport를 이용한 nodejs 로그인 처리: 도메인이 있어야 검증 가능, 안되면 facebook sdk를 이용한 방법으로 교체
        window.open("/auth/facebook", "", "width=400, height=300, menubar=1"); //메뉴바 없는 팝업
    };
    LoginModalCmp = __decorate([
        core_1.Component({
            selector: "login-modal",
            templateUrl: "common/templates/login.modal.html",
            styleUrls: ["common/styles/login.modal.css"]
        }),
        __metadata("design:paramtypes", [session_service_1.SessionService,
            common_service_1.CommonService,
            material_1.MdDialogRef,
            router_1.Router])
    ], LoginModalCmp);
    return LoginModalCmp;
}());
exports.LoginModalCmp = LoginModalCmp;
//# sourceMappingURL=login-modal-cmp.js.map