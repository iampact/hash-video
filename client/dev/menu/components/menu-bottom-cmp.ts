import {
  Component
} from "@angular/core";

import { MenuCmp } from "./menu-cmp";
import { MenuService } from "../services/menu-service";
import { CommonService } from "../../common/services/common-service";
import { SessionService } from "../../common/services/session-service";
import { Router } from "@angular/router";

@Component({
  selector: "menu-bottom-cmp",
  templateUrl: "menu/templates/menu.bottom.html",
  styleUrls: ["menu/styles/menu.bottom.css"]
})

export class MenuBottomCmp extends MenuCmp {
  constructor(
    _menuService: MenuService,
    _commonService:CommonService,
    _sessionService:SessionService,
    _router: Router
  )
  {
    super(_menuService, _commonService, _sessionService, _router);
  }
}
