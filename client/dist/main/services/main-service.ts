import {
  Inject,
  Injectable,
  Injector
} from "@angular/core";

import {
  Observable
} from "rxjs/observable";
import "rxjs/add/operator/map";

import {ConfService} from "../../common/services/conf-service";

@Injectable()
export class MainService {
  constructor(private _confService:ConfService) {
  }

  /*
  * GET MAIN JOB CATEGORY LIST
  * URL:    [hostserver]/api/common/confui/JOB_MAIN_CATEGORY/
  * METHOD: GET
  * PARAMS: {}
  * RETURN: Observable
  * */
  getMainJobCategory(): Observable<any> {
    return this._confService.getConfUIList('JOB_MAIN_CATEGORY');
  }
}
