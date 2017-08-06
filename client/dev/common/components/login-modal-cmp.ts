import {
  Component
} from "@angular/core";
import { MdDialogRef } from "@angular/material";

@Component({
  selector: "login-modal",
  templateUrl: "common/templates/login.modal.html",
  styleUrls: ["common/styles/login.modal.css"]
})
export class LoginModalCmp {
  constructor(
    public loginDialogRef: MdDialogRef<LoginModalCmp>
  ) {

  }
}
