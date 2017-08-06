import {
  Component,
  OnInit
} from "@angular/core";

import {FreeService} from "../services/free-service";

type FilterSearchForm = {
  keyword: string
};

@Component({
  selector: "free-cmp",
  templateUrl: "freelancers/templates/free.html",
  styleUrls: ["freelancers/styles/free.css"]
})

export class FreeCmp implements OnInit {

  constructor(
    private _freeService: FreeService,
  ) {
    // default setting
  }

  ngOnInit() {
    // 초기 실행
    this._init();
  }

  private _searchFreelances (params: FilterSearchForm): void  {

    // TODO: filter 처리

    this._freeService
      .searchFreelances(params)
      .subscribe((result) => {
        console.log(result);
      });
  }

  private _init(): void {
    this._searchFreelances({
      keyword: "*"
    });
  }

  // search main contents
  search(formData: FilterSearchForm): void {
    // TODO: form filter 구성
    let keyword:string = formData.keyword;

    let searchParam:FilterSearchForm = {
      keyword: keyword
    };
    // do search
    this._searchFreelances(searchParam);
  }
}
