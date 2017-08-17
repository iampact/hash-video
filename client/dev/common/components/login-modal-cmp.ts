import {
  Component
} from "@angular/core";
import {SessionService} from "../services/session-service";
import LoginForm = Form.LoginForm;

@Component({
  selector: "login-modal",
  templateUrl: "common/templates/login.modal.html",
  styleUrls: ["common/styles/login.modal.css"]
})
export class LoginModalCmp {

  loginModalForm: LoginForm;

  constructor(
    private sessionService: SessionService
  ) {

    // default setting
    this.loginModalForm = {
      loginName: "",
      loginPassword: ""
    };

  }

  login (loginData: LoginForm): void {
    // login
    this.sessionService.login(loginData).subscribe((result) => {
      console.log('Login Success', result);
    });
  }

  logout ():void {
    // logout
    this.sessionService.logout().subscribe((result) => {
      console.log('Logout Success', result);
    });
  }
}
