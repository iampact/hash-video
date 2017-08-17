import {
  Injectable
} from "@angular/core";
import {
  Restangular
} from "ngx-restangular";
import { ConfService } from "./conf-service";
import { Observable } from "rxjs/Observable";
import LoginForm = Form.LoginForm;

@Injectable()
export class SessionService {
  private _sessionRestService:Restangular;

  constructor(
    private restangular: Restangular,
    private _confService: ConfService
  ) {
    this._sessionRestService = this.restangular.all('sessions');
  }

  /*
  * SESSION POST
  * PARAMS: { loginData:LoginForm }
  * RETURN: Observable
  * */
  login(loginData: LoginForm):Observable<any>  {
    let params = {
      user_id: loginData.loginName,
      user_pw: loginData.loginPassword
    }
    return this._sessionRestService.post(params);
  }

  /*
  * SESSION DELETE
  * PARAMS: {}
  * RETURN: Observable
  * */
  logout():Observable<any> {
    return this._sessionRestService.one('current').remove()
  }
}
