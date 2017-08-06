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
var common_service_1 = require("./common/services/common-service");
var conf_service_1 = require("./common/services/conf-service");
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
// material
var material_1 = require("@angular/material");
var cdk_1 = require("@angular/cdk");
// constants
var app_constants_1 = require("./common/contants/app-constants");
// Function for setting the default restangular configuration
function RestangularConfigFactory(RestangularProvider, authService) {
    RestangularProvider.setBaseUrl(app_constants_1.AppConstants.BASE_URL);
    RestangularProvider.setDefaultHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json;charset=UTF-8',
        'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'
    });
    // This function must return observable
    var refreshAccesstoken = function () {
        // Here you can make action before repeated request
        return authService.functionForTokenUpdate();
    };
    RestangularProvider.addErrorInterceptor(function (response, subject, responseHandler) {
        if (response.status === 403) {
            refreshAccesstoken()
                .switchMap(function (refreshAccesstokenResponse) {
                //If you want to change request or make with it some actions and give the request to the repeatRequest func.
                //Or you can live it empty and request will be the same.
                // update Authorization header
                response.request.headers.set('Authorization', 'Bearer ' + refreshAccesstokenResponse);
                return response.repeatRequest(response.request);
            })
                .subscribe(function (res) { return responseHandler(res); }, function (err) { return subject.error(err); });
            return false; // error handled
        }
        return true; // error not handled
    });
}
exports.RestangularConfigFactory = RestangularConfigFactory;
var AppModule = (function () {
    function AppModule(overlayContainer) {
        // dynamic change theme class
        overlayContainer.themeClass = 'unicorn-dark-theme';
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                angular2_fontawesome_1.Angular2FontawesomeModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                main_route_1.MainRouting,
                free_route_1.FreeRouting,
                project_route_1.ProjectRouting,
                todo_route_1.TodoRouting,
                material_1.MdIconModule,
                material_1.MdInputModule,
                material_1.MdGridListModule,
                material_1.MdButtonModule,
                material_1.MdToolbarModule,
                material_1.MdMenuModule,
                material_1.MdCardModule,
                material_1.MdSidenavModule,
                cdk_1.CdkTableModule,
                material_1.MdDialogModule,
                ngx_restangular_1.RestangularModule.forRoot(RestangularConfigFactory),
            ],
            declarations: [
                app_1.App,
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
                login_modal_cmp_1.LoginModalCmp
            ],
            providers: [
                common_service_1.CommonService,
                conf_service_1.ConfService,
                menu_service_1.MenuService,
                main_service_1.MainService,
                free_service_1.FreeService,
                project_service_1.ProjectService,
                todo_service_1.TodoService,
                elasticsearch_service_1.ElasticSearchService,
                material_1.OverlayContainer,
            ],
            bootstrap: [
                app_1.App,
            ],
        }),
        __metadata("design:paramtypes", [material_1.OverlayContainer])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
