import {
  Injectable
} from "@angular/core";
import {
  Restangular
} from "ngx-restangular";
import { ConfService } from "./conf-service";
import { Observable } from "rxjs/Observable";
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import * as _ from "lodash/lodash.js";
import { User } from "../models/user";
import LoginForm = Form.LoginForm;
import UserInfo = User.UserInfo;

@Injectable()
export class SessionService {
  private _sessionRestService:Restangular;
  private _currentUser:User;
  private _currentSessionObserver: Observer<any>;
  currentSessionChange: Observable<any>;
  //public loginStatusChange: Observable<any>;

  constructor(
    private restangular: Restangular,
    private _confService: ConfService,
  ) {
    // session
    this._sessionRestService = this.restangular.all('sessions');
    // currentSession change
    this.currentSessionChange = new Observable(observer =>
      // share() allows multiple subscribers
      this._currentSessionObserver = observer
    ).share();
  }

  /*
  * CURRENT SESSION
  * PARAMS: {}
  * RETURN: Observable
  * */
  current():Observable<any> {
    return this._sessionRestService.one('current').get();
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
    return this._sessionRestService.one('current').remove();
  }

  /*
  * UPDATE TOKEN
  * PARAMS: {}
  * RETURN: Observable
  * */
  updateToken():Observable<any> {
    // TODO: token update 처리 해야 하는지 검증
    return this._sessionRestService.put();
  }

  /*
  * SET CURRENT USER
  * PARAMS: {User}
  * RETURN: void
  * */
  setCurrentUser(params:any):void {
    // USER MODEL
    /*
    * // Instantiate and save when the form is submitted
      this._currentUser = new User(userInfo);
      this.save(); // 이거는 서버에 update할 때나 쓰는 메소드로 만들면 되것다
    *
    * */
    let _user:User = new User({});
    _.forEach(params, (value, key) => {
      _user[_.toUpper(key)] = value;
    });
    //let user:User = new User(_userParams);
    this._currentUser = _user;
    // share current session
    this._currentSessionObserver.next(this._currentUser);
  }

  /*
  * GET CURRENT USER
  * PARAMS: {}
  * RETURN: UserInfo
  * */
  getCurrentUser():UserInfo {
    return this._currentUser;
  }

  /*
  * DELETE SESSION CURRENT USER
  * PARAMS: {}
  * RETURN: void
  * */
  deleteCurrentUser():void {
    this._currentUser = null;
    // share current session
    this._currentSessionObserver.next(this._currentUser);
  }

  /*
  * IS LOGINED
  * PARAMS: {}
  * RETURN: Boolean
  * */
  isLogined():boolean {
    return _.isObject(this._currentUser);
  }
}
