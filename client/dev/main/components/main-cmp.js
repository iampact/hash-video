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
var main_service_1 = require("../services/main-service");
var elasticsearch_service_1 = require("../../elasticsearch.service");
var MainCmp = (function () {
    function MainCmp(_mainService, _esService) {
        this._mainService = _mainService;
        this._esService = _esService;
        this.title = "Search Job seeker";
        this.esSearchResult = {
            hits: {}
        };
        this.esSesrchResultStr = "";
        this._esIndex = "seeker";
        this._esType = "";
        // default setting
        this.mainSearchForm = {
            keyword: ""
        };
    }
    MainCmp.prototype.ngOnInit = function () {
        // 초기 실행
        this._init();
    };
    MainCmp.prototype._esSearch = function (params) {
        var _this = this;
        this._esService
            .search(params)
            .subscribe(function (result) {
            console.log(result);
            _this.esSearchResult = result;
            _this.esSesrchResultStr = JSON.stringify(_this.esSearchResult);
        });
    };
    MainCmp.prototype._init = function () {
        var _this = this;
        this._esService
            .isAvailable()
            .subscribe(function () {
            console.info('Server is up');
            //alert('Server is up');
            _this._esSearch({
                q: "*"
            });
        });
    };
    // search main contents
    MainCmp.prototype.search = function (formData) {
        var keyword = formData.keyword;
        var esParams = {
            index: this._esIndex,
            type: this._esType,
            q: "job:" + keyword
        };
        // do search
        //this._esSearch(esParams);
        // delete input text
        //this.mainSearchForm.keyword = "";
        // close side nav
        //this.mainSideNavEl.close();
    };
    MainCmp = __decorate([
        core_1.Component({
            selector: "main-cmp",
            templateUrl: "main/templates/main.html",
            styleUrls: ["main/styles/main.css"]
        }),
        __metadata("design:paramtypes", [main_service_1.MainService,
            elasticsearch_service_1.ElasticSearchService])
    ], MainCmp);
    return MainCmp;
}());
exports.MainCmp = MainCmp;
