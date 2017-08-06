import {
  Component
} from "@angular/core";

import { MenuCmp } from "./menu-cmp";
import { MenuService } from "../services/menu-service";
import { CommonService } from "../../common/services/common-service";

@Component({
  selector: "menu-bottom-cmp",
  templateUrl: "menu/templates/menu.bottom.html",
  styleUrls: ["menu/styles/menu.bottom.css"]
})

export class MenuBottomCmp extends MenuCmp {
  constructor(_menuService: MenuService, _commonService:CommonService) {
    super(_menuService, _commonService);
  }
}
