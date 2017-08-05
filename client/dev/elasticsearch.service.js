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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ElasticSearchService = (function () {
    function ElasticSearchService(_http) {
        this._http = _http;
        this._pingRequestWaitTime = 3000;
    }
    ElasticSearchService_1 = ElasticSearchService;
    ElasticSearchService.prototype.getJsonHeader = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    };
    ElasticSearchService.prototype.search = function (params) {
        var headers = this.getJsonHeader();
        return this._http
            .post(ElasticSearchService_1.ENDPOINT, params, { headers: headers })
            .map(function (r) { return r.json(); });
    };
    ElasticSearchService.prototype.addToIndex = function (index, body) {
        var headers = this.getJsonHeader();
        var params = {
            index: index,
            body: body
        };
        return this._http
            .post(ElasticSearchService_1.ENDPOINT + '/indices/add', params, { headers: headers })
            .map(function (r) { return r.json(); });
    };
    ElasticSearchService.prototype.isAvailable = function () {
        var headers = this.getJsonHeader();
        var params = {
            requestTimeout: this._pingRequestWaitTime
        };
        return this._http
            .post(ElasticSearchService_1.ENDPOINT + '/ping', params, { headers: headers })
            .map(function (r) { return r.json(); });
    };
    ElasticSearchService.ENDPOINT = "/api/search/es";
    ElasticSearchService = ElasticSearchService_1 = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)),
        __metadata("design:paramtypes", [http_1.Http])
    ], ElasticSearchService);
    return ElasticSearchService;
    var ElasticSearchService_1;
}());
exports.ElasticSearchService = ElasticSearchService;
