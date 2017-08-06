import {
  Injectable
} from "@angular/core";
import {
  Restangular
} from "ngx-restangular";
import { ConfService } from "./conf-service";
import ConfObject = Conf.ConfObject;
import * as _ from "lodash/lodash.js";

@Injectable()
export class CommonService {
  private _commonRestService:Restangular;

  constructor(
    private restangular: Restangular,
    private _confService: ConfService
  ) {
    this._commonRestService = this.restangular.all('common');
  }

  /*
  * GET LOGO PATH
  * PARAMS: {}
  * RETURN: Promise
  * */
  getLogoPath():Promise<string> {
    return new Promise((resolve, reject) => {
      this._confService.getConf('@WEB_UI_GLOBAL', 'LogoFile')
        .subscribe((result) => {
          let plain:ConfObject[] = result.plain();
          if (_.isArray(plain) && plain.length === 1) {
            resolve(plain[0].CONF_VALUE);
          } else {
            reject(new Error('not found logo path'));
          }
        });
    });
  }

}
