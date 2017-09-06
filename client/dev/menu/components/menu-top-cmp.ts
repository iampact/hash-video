import {
  Component,
  ElementRef,
  ViewChild
} from "@angular/core";

import { MenuCmp } from "./menu-cmp";
import { MenuService } from "../services/menu-service";
import { CommonService } from "../../common/services/common-service";
import { SessionService } from "../../common/services/session-service";
import { MdDialog, MdMenuTrigger } from "@angular/material";
import { LoginModalCmp } from "../../common/components/login-modal-cmp";
import { Router } from "@angular/router";

@Component({
  selector: "menu-top-cmp",
  templateUrl: "menu/templates/menu.top.html",
  styleUrls: ["menu/styles/menu.top.css"],
})

export class MenuTopCmp extends MenuCmp {
  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
  @ViewChild('userMenuBtn') userMenuBtn: ElementRef;
  @ViewChild('userMenu') userMenu;

  public isUserMenuUsing:boolean = false;
  public REPEAT_TIME:number = 1000;

  constructor(
    _menuService: MenuService,
    _commonService: CommonService,
    _sessionService: SessionService,
    _router: Router,
     public dialog: MdDialog
  ) {
      super(_menuService, _commonService, _sessionService, _router);
  }

  // open login dialog
  openLoginDialog(): void {
    let dialogRef = this.dialog.open(LoginModalCmp);

    dialogRef.afterClosed ()
      .subscribe(result => {
        // TODO: 어떤 버튼을 클릭했는데 결과
        console.log(result);
    });
  }

  // open user menu
  openUserMenu(): void {
    let THIS = this;
    let menuBtnEl = this.userMenuBtn.nativeElement;
    $(menuBtnEl).addClass('selected');

    $(menuBtnEl).off('mouseenter');
    $(menuBtnEl).on('mouseenter', () => {
      THIS.isUserMenuUsing = true;
    });
    // TODO: mouse가 위에 있는데 mouseleave가 호출되는 문제가 있음
    $(menuBtnEl).off('mouseleave');
    $(menuBtnEl).on('mouseleave', () => {
      THIS.isUserMenuUsing = false;
      THIS.checkUsingMenu();
    });

    this.isUserMenuUsing = true;
    this.trigger.openMenu();
  }

  closeUserMenu(): void {
    this.trigger.closeMenu();
  }

  checkUsingMenu (): void {
    let THIS = this;
    setTimeout(() => {
      if (THIS.isUserMenuUsing === false) {
        THIS.closeUserMenu();
      } else {
        // 재귀 호출
        THIS.checkUsingMenu();
      }
    }, this.REPEAT_TIME)
  }

  addUserMenuOpenEvent(): void {
    let THIS = this;
    // open 상태에서 mouse leave 이벤트 on add
    let menuEl = $('div.' + this.userMenu._elementRef.nativeElement.classList[0]);

    $(menuEl).off('mouseenter');
    $(menuEl).on('mouseenter', () => {
      THIS.isUserMenuUsing = true;
    });
    $(menuEl).off('mouseleave');
    $(menuEl).on('mouseleave', () => {
      THIS.isUserMenuUsing = false;
      THIS.closeUserMenu();
    });

    this.isUserMenuUsing = true;
    // 열리고 일정시간이 지났는데도 isUserMenuUsing 이 false면 닫는다
    // this.userMenu 에 마우스 이벤트를 걸어 over면 isUserMenuUsing true, leave면 false처리

    this.checkUsingMenu();
  }

  addUserMenuCloseEvent(): void {
    // user menu close event
    $(this.userMenuBtn.nativeElement).removeClass('selected');
  }

  // open user info or move user info
  userInfo(): void {
    console.log(this.currentUser);
    // TODO: open user info or move user info
  }
}
