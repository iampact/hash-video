import {
  Component,
  OnInit
} from "@angular/core";

import { User } from "../../common/models/user";
import { MenuService } from "../services/menu-service";
import { CommonService } from "../../common/services/common-service";
import { SessionService } from "../../common/services/session-service";
import * as _ from "lodash/lodash.js";
import { Router } from "@angular/router";

@Component({
  selector: "menu-cmp",
  template: "<div></div>"
})

export class MenuCmp implements OnInit {

  public mainLogoPath:string;
  public isLogined:boolean;
  public currentUser:User;

  constructor(
    private _menuService:MenuService,
    private _commonService:CommonService,
    private _sessionService:SessionService,
    private _router:Router
  ) {

  }

  ngOnInit() {
    // 초기 실행
    this._init();

    this.currentUser = this._sessionService.getCurrentUser();
    this.isLogined = this._sessionService.isLogined();
    // current session change handler
    this._sessionService.currentSessionChange.subscribe((user:User) => {
      this.currentUser = user;
      this.isLogined = !_.isNull(this.currentUser);
    });
  }

  private _init(): void {
    // get main logo path
    this.getMainLogoPath().then((logoPath:string) => {
      this.mainLogoPath = logoPath;
    });
  }

  private getMainLogoPath ():Promise<string> {
    return this._commonService
      .getLogoPath()
  }

  // logout
  public logoutUser():void {
    // logout
    this._sessionService.logout().subscribe((result) => {
      // 구현해야함
      //console.log('Logout Success', result.plain());
      localStorage.removeItem('access_token');
      this._sessionService.deleteCurrentUser();
      this._commonService.openCommonModal("로그아웃", result.data.message, 'info', 2000).afterClosed()
        .subscribe(result => {
          this._router.navigateByUrl('/');
        });
    });
  }
}
