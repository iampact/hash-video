// angular
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, FormBuilder } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// restangular
import { RestangularModule } from "ngx-restangular";

// app
import { App } from "./app";

// common
import { LoginModalCmp } from "./common/components/login-modal-cmp";
import { CommonService } from "./common/services/common-service";
import { ConfService } from "./common/services/conf-service";

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
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

// elasticsearch
import { ElasticSearchService } from "./elasticsearch.service";
// material
import {
  MaterialModule,
  FullscreenOverlayContainer,
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdTableModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  OverlayContainer,
  StyleModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk';

// constants
import { AppConstants } from "./common/contants/app-constants";

// Function for setting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider, authService) {
  RestangularProvider.setBaseUrl(AppConstants.BASE_URL);
  RestangularProvider.setDefaultHeaders({
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept': 'application/json;charset=UTF-8',
    'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'
  });

  // This function must return observable
  let refreshAccesstoken = () => {
    // Here you can make action before repeated request
    return authService.functionForTokenUpdate();
  };

  RestangularProvider.addErrorInterceptor((response, subject, responseHandler) => {
    if (response.status === 403) {

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
    }
    return true; // error not handled
  });

}

@NgModule({
    imports: [
      Angular2FontawesomeModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpModule,
      MainRouting,
      FreeRouting,
      ProjectRouting,
      TodoRouting,
      MdIconModule,
      MdInputModule,
      MdGridListModule,
      MdButtonModule,
      MdToolbarModule,
      MdMenuModule,
      MdCardModule,
      MdSidenavModule,
      CdkTableModule,
      MdDialogModule,
      RestangularModule.forRoot(RestangularConfigFactory),
    ],
    declarations: [
      App,
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
      LoginModalCmp
    ],
    providers: [
      CommonService,
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
      App,
      //LoginModalCmp
    ],
})

export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    // dynamic change theme class
    overlayContainer.themeClass = 'unicorn-dark-theme';
  }
}
