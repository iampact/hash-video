"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppConstants = (function () {
    function AppConstants() {
    }
    AppConstants.API_ENDPOINT = '/api/';
    // TODO: 외부 config 설정으로 교체
    AppConstants.BASE_URL = 'http://localhost:3000' + AppConstants.API_ENDPOINT;
    return AppConstants;
}());
exports.AppConstants = AppConstants;
