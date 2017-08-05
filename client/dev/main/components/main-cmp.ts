import {
  ViewChild,
  ElementRef,
  Component,
  OnInit
} from "@angular/core";

import {
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";

import {MainService} from "../services/main-service";
import {ElasticSearchService} from "../../elasticsearch.service";
import SearchParams = Elasticsearch.SearchParams;
import ConfUIObject = ConfObject.ConfUiObject;

type EsSearchResult = {
  hits:Object,
  timed_out?:boolean,
  took?:number,
  _shards?:Object
};

type MainSearchForm = {
  keyword: string
};

@Component({
  selector: "main-cmp",
  templateUrl: "main/templates/main.html",
  styleUrls: ["main/styles/main.css"]
})

export class MainCmp implements OnInit {
  title: string = "Search Job seeker";
  esSearchResult:EsSearchResult = {
    hits: {}
  };
  esSesrchResultStr:string = "";
  mainSearchForm: MainSearchForm;
  mainJobCategory: ConfUIObject[];

  private _esIndex:string = "seeker";
  private _esType:string = "";

  constructor(
    private _mainService: MainService,
    private _esService: ElasticSearchService,
  ) {
    // default setting
    this.mainSearchForm = {
      keyword: ""
    };
  }

  ngOnInit() {
    // 초기 실행
    this._init();
  }

  private _esSearch (params: SearchParams): void  {
    this._esService
      .search(params)
      .subscribe((result) => {
        console.log(result);
        this.esSearchResult = result;
        this.esSesrchResultStr = JSON.stringify(this.esSearchResult);
      });
  }

  private _init(): void {

    this._esService
      .isAvailable()
      .subscribe(() => {
        console.info('Server is up');
        //alert('Server is up');

        this._esSearch({
          q: "*"
        });

      });
  }

  // search main contents
  search(formData: MainSearchForm): void {
    let keyword:string = formData.keyword;
    let esParams:SearchParams = {
      index: this._esIndex,
      type: this._esType,
      q: "job:" + keyword
    };

    // do search
    //this._esSearch(esParams);


    // delete input text
    //this.mainSearchForm.keyword = "";

    // close side nav
    //this.mainSideNavEl.close();
  }
}
