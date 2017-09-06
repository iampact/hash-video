import {
  Injectable
} from "@angular/core";
import {
  Restangular
} from "ngx-restangular";
import { Observable } from "rxjs/Observable";
import { SessionService}  from "./session-service";

@Injectable()
export class AuthService {

  constructor(
    private _sessionService:SessionService
  ) {
  }

  functionForTokenUpdate():Observable<any> {
    return this._sessionService.updateToken();
  }
}
