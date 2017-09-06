// angular
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// restangular
import { RestangularModule } from "ngx-restangular";

// app
import { App } from "./app";

// common
import { LoginModalCmp } from "./common/components/login-modal-cmp";
import { CommonModalCmp } from "./common/components/common-modal-cmp";
import { CommonService } from "./common/services/common-service";
import { ConfService } from "./common/services/conf-service";
import { SessionService } from "./common/services/session-service";
import { AuthService } from "./common/services/auth-service";

// menu
import { MenuCmp } from "./menu/components/menu-cmp";
import { MenuTopCmp } from "./menu/components/menu-top-cmp";
import { MenuBottomCmp } from "./menu/components/menu-bottom-cmp";
import { MenuService } from "./menu/services/menu-service";

// main
import { MainCmp } from "./main/components/main-cmp";
import { MainJobCategoryCmp } from "./main/components/main-job-category-cmp";
import { MainRouting } from "./main/components/main-route";
import { MainService } from "./main/services/main-service";

// freelancers
import { FreeCmp } from "./freelancers/components/free-cmp";
import { FreeRouting } from "./freelancers/components/free-route";
import { FreeService } from "./freelancers/services/free-service";

// projects
import { ProjectCmp } from "./projects/components/project-cmp";
import { ProjectRouting } from "./projects/components/project-route";
import { ProjectService } from "./projects/services/project-service";

// todo
import { TodoCmp } from "./todo/components/todo-cmp";
import { TodoRouting } from "./todo/components/todo-route";
import { TodoService } from "./todo/services/todo-service";

// angular2 font-awesome
import { Angular2FontawesomeModule } from "angular2-fontawesome/angular2-fontawesome";

// elasticsearch
import { ElasticSearchService } from "./elasticsearch.service";

// material module
import {
  MaterialModule
} from "./material.module";

// constants
import { AppConstants } from "./common/contants/app-constants";
import { OverlayContainer } from "@angular/cdk/overlay";
import { CdkTableModule } from "@angular/cdk/table";
import { PlatformModule } from "@angular/cdk/platform";
import { A11yModule } from "@angular/cdk/a11y";

// Function for setting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl(AppConstants.BASE_URL);
  RestangularProvider.setDefaultHeaders({
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept': 'application/json;charset=UTF-8',
    //'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'
  });

  // This function must return observable
  // TODO: 403 error 발생시 Token update 처리 request 요청 하는 메소드인데 필요 여부 확인 후 개발 예정
  /*let refreshAccesstoken = () => {
    // Here you can make action before repeated request
    return authService.functionForTokenUpdate();
  };*/

  RestangularProvider.addFullRequestInterceptor((element, operation, path, url, headers, params) => {
    // header add token
    let authToken = localStorage.getItem('access_token');
    if (authToken) {
      headers.Authorization = 'Bearer ' + authToken;
    } else if (headers.Authorization) {
      delete headers.Authorization;
    }
    return {
      params: params,
      headers: headers,
      element: element
    }
  });

  RestangularProvider.addErrorInterceptor((response, subject, responseHandler) => {
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

@NgModule({
    imports: [
      Angular2FontawesomeModule,
      MaterialModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      MainRouting,
      FreeRouting,
      ProjectRouting,
      TodoRouting,
      CdkTableModule,
      PlatformModule,
      A11yModule,

      RestangularModule.forRoot(RestangularConfigFactory),
    ],
    declarations: [
      App,
      CommonModalCmp,
      MenuCmp,
      MenuTopCmp,
      MenuBottomCmp,
      MainCmp,
      MainJobCategoryCmp,
      FreeCmp,
      ProjectCmp,
      LoginModalCmp,
      TodoCmp,
    ],
    entryComponents: [
      LoginModalCmp,
      CommonModalCmp
    ],
    providers: [
      CommonService,
      SessionService,
      AuthService,
      ConfService,
      MenuService,
      MainService,
      FreeService,
      ProjectService,
      TodoService,
      ElasticSearchService,
      OverlayContainer,
    ],
    bootstrap: [
      App
    ],
})

export class AppModule {
  constructor(
    private overlayContainer: OverlayContainer,
    private sessionService: SessionService
  ) {
    // dynamic change theme class
    this.overlayContainer.themeClass = 'unicorn-dark-theme';

    // session current 상태 확인
    this.sessionService.current()
      .subscribe(result => {
        console.log(result);
        this.sessionService.setCurrentUser(result.data.user);
      }, error => {
        // TODO: session 없음
        console.log('not have session', error)
      })
  }
}
