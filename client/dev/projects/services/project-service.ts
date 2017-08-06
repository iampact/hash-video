import {
  Inject,
  Injectable,
  Injector
} from "@angular/core";

import {
  Observable
} from "rxjs/observable";
import "rxjs/add/operator/map";

import SearchParams = Elasticsearch.SearchParams;

import {ConfService} from "../../common/services/conf-service";
import {ElasticSearchService} from "../../elasticsearch.service";

@Injectable()
export class ProjectService {
  private _esIndex:string = "projects";
  private _esType:string = "";
  constructor(
    private _confService:ConfService,
    private _esService: ElasticSearchService,
  ) {

  }

  /*
  * SEARCH PROJECT LIST
  * PARAMS: {searchFilter:any}
  * RETURN: Observable
  * */
  searchProjects(searchFilter:any): Observable<any> {

    let esParams:SearchParams = {
      index: this._esIndex,
      type: this._esType,
      // TODO: filter에 따라 검색어 결정
      q: searchFilter
    };

    return this._esService
      .search(esParams);
  }
}
