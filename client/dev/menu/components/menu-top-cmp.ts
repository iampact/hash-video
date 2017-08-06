import {
  Component
} from "@angular/core";

import { MenuCmp } from "./menu-cmp";
import { MenuService } from "../services/menu-service";
import { CommonService } from "../../common/services/common-service";
import { MdDialog } from "@angular/material";
import { LoginModalCmp } from "../../common/components/login-modal-cmp";

@Component({
  selector: "menu-top-cmp",
  templateUrl: "menu/templates/menu.top.html",
  styleUrls: ["menu/styles/menu.top.css"],
})

export class MenuTopCmp extends MenuCmp {
  constructor(
    _menuService: MenuService,
    _commonService:CommonService,
    public dialog: MdDialog) {
    super(_menuService, _commonService);
  }

  // open login dialog
  openLoginDialog () {
    let dialogRef = this.dialog.open(LoginModalCmp);

    dialogRef.afterClosed ()
      .subscribe(result => {
        // TODO: 어떤 버튼을 클릭했는데 결과
        console.log(result);
    });
  }
}
