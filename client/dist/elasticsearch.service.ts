import { Inject, Injectable } from '@angular/core';
import SearchParams = Elasticsearch.SearchParams;
import {
  Http,
  Headers
} from "@angular/http";
import {
  Observable
} from "rxjs/observable";
import PingParams = Elasticsearch.PingParams;
import IndicesCreateParams = Elasticsearch.IndicesCreateParams;


@Injectable()
export class ElasticSearchService {
  static ENDPOINT:string = "/api/search/es";
  private _pingRequestWaitTime:number = 3000;

  constructor(@Inject(Http) private _http: Http) {

  }

  private getJsonHeader():any {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return headers;
  }

  search(params:SearchParams): Observable<any> {
    let headers = this.getJsonHeader();
    return this._http
      .post(ElasticSearchService.ENDPOINT, params, {headers})
      .map((r) => r.json());
  }

  addToIndex(index:string, body:Object ): Observable<any> {
    let headers = this.getJsonHeader();
    let params:IndicesCreateParams = {
      index: index,
      body: body
    };

    return this._http
      .post(ElasticSearchService.ENDPOINT + '/indices/add', params, {headers})
      .map((r) => r.json());
  }

  isAvailable(): Observable<any> {

    let headers = this.getJsonHeader();
    let params:PingParams = {
      requestTimeout: this._pingRequestWaitTime
    };

    return this._http
      .post(ElasticSearchService.ENDPOINT + '/ping', params, {headers})
      .map((r) => r.json());
  }
}
