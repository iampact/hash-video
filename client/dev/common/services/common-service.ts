import {
  Injectable
} from "@angular/core";
import {
  Restangular
} from "ngx-restangular";
import { ConfService } from "./conf-service";
import ConfObject = Conf.ConfObject;
import * as _ from "lodash/lodash.js";
import {
  MdDialog,
  MdDialogRef,
  MdDialogConfig
} from "@angular/material";
import { CommonModalCmp } from "../components/common-modal-cmp";

@Injectable()
export class CommonService {
  private _commonRestService:Restangular;

  constructor(
    private restangular: Restangular,
    private _confService: ConfService,
    public dialog: MdDialog
  ) {
    this._commonRestService = this.restangular.all('common');
  }

  /*
  * GET LOGO PATH
  * PARAMS: {}
  * RETURN: Promise
  * */
  getLogoPath ():Promise<string> {
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

  /*
  * OPEN COMMON MODAL
  * PARAMS: {title:string, contents:any, type:string}
  * RETURN: MdDialogRef<CommonModalCmp>
  * */
  openCommonModal (title:string, contents:any, type:string, autoCloseTime:number = 0):MdDialogRef<CommonModalCmp> {
    let config = new MdDialogConfig();
    let dialogRef:MdDialogRef<CommonModalCmp> = this.dialog.open(CommonModalCmp, config);
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.contents = contents;
    dialogRef.componentInstance.type = type;

    if (autoCloseTime > 0) {
      // auto close
      setTimeout(() => {
        dialogRef.close();
      }, autoCloseTime);
    }

    return dialogRef;
  }
}
