import {
  Component,
  OnInit
} from "@angular/core";

import {MainService} from "../services/main-service";
import ConfUIObject = ConfObject.ConfUiObject;

@Component({
  selector: "main-job-category-cmp",
  templateUrl: "main/templates/main.job.category.html",
  styleUrls: ["main/styles/main.job.category.css"]
})

export class MainJobCategoryCmp implements OnInit {

  gridCols:number = 3;
  gridRowHeight:string = '2:1.5';
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

  public jobCategoryClick (item) {
    // TODO: 해당 category로 이동
    console.log(item);
  }

  // get job category
  private _getJobCategory () :void {
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
