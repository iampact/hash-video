import {
  Inject,
  Injectable
} from "@angular/core";

import {
  Observable
} from "rxjs/observable";

import "rxjs/add/operator/map";

import {
  Restangular
} from "ngx-restangular";

@Injectable()
export class ConfService {
  private _commonRestService:Restangular;

  constructor(private restangular: Restangular) {
    this._commonRestService = this.restangular.all('common');
  }

  /*
  * GET CONF
  * URL:    [hostserver]/api/common/conf/{category}/{key}/
  * METHOD: GET
  * PARAMS: {category: string, key: string}
  * RETURN: Observable
  * */
  getConf(category: string, key: string): Observable<any> {
    return this._commonRestService.all('conf').one(category, key).get();
  }

  /*
  * GET CONF LIST
  * URL:    [hostserver]/api/common/conf/{category}/
  * METHOD: GET
  * PARAMS: {category: string}
  * RETURN: Observable
  * */
  getConfList(category: string): Observable<any> {
    return this._commonRestService.all('conf').one(category).getList();
  }

  /*
  * GET CONFUI LIST
  * URL:    [hostserver]/api/common/confui/{item}/
  * METHOD: GET
  * PARAMS: {item: string}
  * RETURN: Observable
  * */
  getConfUIList(item: string): Observable<any> {
    return this._commonRestService.all('confui').one(item).getList();
  }
}
