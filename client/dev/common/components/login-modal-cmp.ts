import {
  Component
} from "@angular/core";
import { SessionService } from "../services/session-service";
import { CommonService } from "../services/common-service";
import { Router } from "@angular/router";
import LoginForm = Form.LoginForm;
import { MdDialogRef } from "@angular/material";

@Component({
  selector: "login-modal",
  templateUrl: "common/templates/login.modal.html",
  styleUrls: ["common/styles/login.modal.css"]
})
export class LoginModalCmp {

  loginModalForm: LoginForm;

  constructor(
    private sessionService: SessionService,
    private commonService: CommonService,
    private dialogRef:MdDialogRef<LoginModalCmp>,
    public router:Router,
  ) {

    // default setting
    this.loginModalForm = {
      loginName: "",
      loginPassword: ""
    };

  }

  login (loginData: LoginForm): void {
    // login
    this.sessionService.login(loginData)
      .subscribe((result) => {
        //console.log('Login Success', result);
        // result.data.access_token 을 request.header에 넣어서 request 때 마다 전송한다
        localStorage.setItem('access_token', result.data.access_token);
        // set current user data
        this.sessionService.setCurrentUser(result.data.user);
        // 화면 이동 - main 으로
        this.commonService.openCommonModal("로그인 성공", result.data.user.USER_NAME + "님 어서오세요.", 'info', 2000).afterClosed()
          .subscribe(result => {
            // self 창 닫기
            this.dialogRef.close();
            this.router.navigateByUrl('/');
          });
      }, error => {
        // error 표시
        this.commonService.openCommonModal("로그인 에러", error.data.data.message, 'error').afterClosed()
          .subscribe(result => {
            // TODO: 로그인 메인 화면으로 이동
            //console.log(result);

          });
      });
  }

  // 외부 계정 연동 login
  externalLogin (target: string): void {
    // TODO: facebook sdk를 이용한 방법으로 처리해도 됨
    // angular2 facebook sdk - https://www.npmjs.com/package/ng2-facebook-sdk

    // 새창에서 passport를 이용한 nodejs 로그인 처리: 도메인이 있어야 검증 가능, 안되면 facebook sdk를 이용한 방법으로 교체
    window.open("/auth/facebook", "", "width=400, height=300, menubar=1");  //메뉴바 없는 팝업

  }
}
