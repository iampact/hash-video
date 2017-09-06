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
// angular
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
// restangular
var ngx_restangular_1 = require("ngx-restangular");
// app
var app_1 = require("./app");
// common
var login_modal_cmp_1 = require("./common/components/login-modal-cmp");
var common_modal_cmp_1 = require("./common/components/common-modal-cmp");
var common_service_1 = require("./common/services/common-service");
var conf_service_1 = require("./common/services/conf-service");
var session_service_1 = require("./common/services/session-service");
var auth_service_1 = require("./common/services/auth-service");
// menu
var menu_cmp_1 = require("./menu/components/menu-cmp");
var menu_top_cmp_1 = require("./menu/components/menu-top-cmp");
var menu_bottom_cmp_1 = require("./menu/components/menu-bottom-cmp");
var menu_service_1 = require("./menu/services/menu-service");
// main
var main_cmp_1 = require("./main/components/main-cmp");
var main_job_category_cmp_1 = require("./main/components/main-job-category-cmp");
var main_route_1 = require("./main/components/main-route");
var main_service_1 = require("./main/services/main-service");
// freelancers
var free_cmp_1 = require("./freelancers/components/free-cmp");
var free_route_1 = require("./freelancers/components/free-route");
var free_service_1 = require("./freelancers/services/free-service");
// projects
var project_cmp_1 = require("./projects/components/project-cmp");
var project_route_1 = require("./projects/components/project-route");
var project_service_1 = require("./projects/services/project-service");
// todo
var todo_cmp_1 = require("./todo/components/todo-cmp");
var todo_route_1 = require("./todo/components/todo-route");
var todo_service_1 = require("./todo/services/todo-service");
// angular2 font-awesome
var angular2_fontawesome_1 = require("angular2-fontawesome/angular2-fontawesome");
// elasticsearch
var elasticsearch_service_1 = require("./elasticsearch.service");
// material module
var material_module_1 = require("./material.module");
// constants
var app_constants_1 = require("./common/contants/app-constants");
var overlay_1 = require("@angular/cdk/overlay");
var table_1 = require("@angular/cdk/table");
var platform_1 = require("@angular/cdk/platform");
var a11y_1 = require("@angular/cdk/a11y");
// Function for setting the default restangular configuration
function RestangularConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(app_constants_1.AppConstants.BASE_URL);
    RestangularProvider.setDefaultHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json;charset=UTF-8',
    });
    // This function must return observable
    // TODO: 403 error 발생시 Token update 처리 request 요청 하는 메소드인데 필요 여부 확인 후 개발 예정
    /*let refreshAccesstoken = () => {
      // Here you can make action before repeated request
      return authService.functionForTokenUpdate();
    };*/
    RestangularProvider.addFullRequestInterceptor(function (element, operation, path, url, headers, params) {
        // header add token
        var authToken = localStorage.getItem('access_token');
        if (authToken) {
            headers.Authorization = 'Bearer ' + authToken;
        }
        else if (headers.Authorization) {
            delete headers.Authorization;
        }
        return {
            params: params,
            headers: headers,
            element: element
        };
    });
    RestangularProvider.addErrorInterceptor(function (response, subject, responseHandler) {
        // 401 error
        if (response.status === 401) {
            // TODO: 세션 없음 -> 현재 session을 관리하는 frontend 모듈에 사용자가 없음. dialog는 401에러에서는 필요 없음
            //this.openDialog('', '', 'alert');
        }
        // 403 error
        /*else if (response.status === 403) {
    
          refreshAccesstoken()
            .switchMap(refreshAccesstokenResponse => {
              //If you want to change request or make with it some actions and give the request to the repeatRequest func.
              //Or you can live it empty and request will be the same.
    
              // update Authorization header
              response.request.headers.set('Authorization', 'Bearer ' + refreshAccesstokenResponse);
    
              return response.repeatRequest(response.request);
            })
            .subscribe(
              res => responseHandler(res),
              err => subject.error(err)
            );
    
          return false; // error handled
        } */
        //let dialogRef:MdDialogRef<CommonModalCmp>
        // other error
        //AppModule.openDialog("에러 " + response.status, response.data.data, 'error');
        /*commonService.openCommonModal("에러 " + response.status, response.data.data, 'error').afterClosed()
          .subscribe(result => {
            // TODO: 어떤 버튼을 클릭했는데 결과
            console.log(result);
          });*/
        return true; // error not handled
    });
}
exports.RestangularConfigFactory = RestangularConfigFactory;
var AppModule = (function () {
    function AppModule(overlayContainer, sessionService) {
        var _this = this;
        this.overlayContainer = overlayContainer;
        this.sessionService = sessionService;
        // dynamic change theme class
        this.overlayContainer.themeClass = 'unicorn-dark-theme';
        // session current 상태 확인
        this.sessionService.current()
            .subscribe(function (result) {
            console.log(result);
            _this.sessionService.setCurrentUser(result.data.user);
        }, function (error) {
            // TODO: session 없음
            console.log('not have session', error);
        });
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                angular2_fontawesome_1.Angular2FontawesomeModule,
                material_module_1.MaterialModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                main_route_1.MainRouting,
                free_route_1.FreeRouting,
                project_route_1.ProjectRouting,
                todo_route_1.TodoRouting,
                table_1.CdkTableModule,
                platform_1.PlatformModule,
                a11y_1.A11yModule,
                ngx_restangular_1.RestangularModule.forRoot(RestangularConfigFactory),
            ],
            declarations: [
                app_1.App,
                common_modal_cmp_1.CommonModalCmp,
                menu_cmp_1.MenuCmp,
                menu_top_cmp_1.MenuTopCmp,
                menu_bottom_cmp_1.MenuBottomCmp,
                main_cmp_1.MainCmp,
                main_job_category_cmp_1.MainJobCategoryCmp,
                free_cmp_1.FreeCmp,
                project_cmp_1.ProjectCmp,
                login_modal_cmp_1.LoginModalCmp,
                todo_cmp_1.TodoCmp,
            ],
            entryComponents: [
                login_modal_cmp_1.LoginModalCmp,
                common_modal_cmp_1.CommonModalCmp
            ],
            providers: [
                common_service_1.CommonService,
                session_service_1.SessionService,
                auth_service_1.AuthService,
                conf_service_1.ConfService,
                menu_service_1.MenuService,
                main_service_1.MainService,
                free_service_1.FreeService,
                project_service_1.ProjectService,
                todo_service_1.TodoService,
                elasticsearch_service_1.ElasticSearchService,
                overlay_1.OverlayContainer,
            ],
            bootstrap: [
                app_1.App
            ],
        }),
        __metadata("design:paramtypes", [overlay_1.OverlayContainer,
            session_service_1.SessionService])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
