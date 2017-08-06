import {
  Component,
  OnInit
} from "@angular/core";

import { MainService } from "../services/main-service";
import ConfUIObject = Conf.ConfUiObject;

@Component({
  selector: "main-job-category-cmp",
  templateUrl: "main/templates/main.job.category.html",
  styleUrls: ["main/styles/main.job.category.css"]
})

export class MainJobCategoryCmp implements OnInit {

  gridCols:number = 3;
  gridRowHeight:string = '120px';
  tiles:any;
  mainJobCategory: ConfUIObject[];

  constructor (
    private _mainService: MainService
  ) {

  }

  ngOnInit () {
    // 초기 실행
    this._init();
  }

  public jobCategoryClick (item):void {
    // TODO: 해당 category로 이동
    console.log(item);
  }

  public getImagePath (src):string {
    return '/' + src;
  }

  // get job category
  private _getJobCategory ():void {
    this._mainService
      .getMainJobCategory()
      .subscribe((result) => {
        this.mainJobCategory = result.plain();
      });
  }

  private _init(): void {
    this._getJobCategory();
  }
}
