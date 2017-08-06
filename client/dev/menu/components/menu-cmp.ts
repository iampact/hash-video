import {
  Component,
  OnInit
} from "@angular/core";

import { MenuService } from "../services/menu-service";
import { CommonService } from "../../common/services/common-service";

@Component({
  selector: "menu-cmp",
  template: "<div></div>"
})

export class MenuCmp implements OnInit {

  public mainLogoPath:string;

  constructor(private _menuService:MenuService, private _commonService:CommonService) {

  }

  ngOnInit() {
    // 초기 실행
    this._init();
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
}
