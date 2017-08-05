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
var app_1 = require("./app");
var conf_service_1 = require("./common/services/conf-service");
var main_cmp_1 = require("./main/components/main-cmp");
var main_job_category_cmp_1 = require("./main/components/main-job-category-cmp");
var main_route_1 = require("./main/components/main-route");
var main_service_1 = require("./main/services/main-service");
var todo_cmp_1 = require("./todo/components/todo-cmp");
var todo_route_1 = require("./todo/components/todo-route");
var todo_service_1 = require("./todo/services/todo-service");
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
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                main_route_1.MainRouting,
                todo_route_1.TodoRouting,
                material_1.MdInputModule,
                material_1.MdGridListModule,
                material_1.MdButtonModule,
                material_1.MdCardModule,
                material_1.MdSidenavModule,
                cdk_1.CdkTableModule,
                ngx_restangular_1.RestangularModule.forRoot(RestangularConfigFactory),
            ],
            declarations: [
                app_1.App,
                main_cmp_1.MainCmp,
                main_job_category_cmp_1.MainJobCategoryCmp,
                todo_cmp_1.TodoCmp,
            ],
            providers: [
                conf_service_1.ConfService,
                main_service_1.MainService,
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
