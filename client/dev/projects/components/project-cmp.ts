import {
  Component,
  OnInit
} from "@angular/core";

import {ProjectService} from "../services/project-service";

type FilterSearchForm = {
  keyword: string
};

@Component({
  selector: "project-cmp",
  templateUrl: "projects/templates/project.html",
  styleUrls: ["projects/styles/project.css"]
})

export class ProjectCmp implements OnInit {

  constructor(
    private _projectService: ProjectService,
  ) {
    // default setting
  }

  ngOnInit() {
    // 초기 실행
    this._init();
  }

  private _searchProjects (params: FilterSearchForm): void  {

    // TODO: filter 처리

    this._projectService
      .searchProjects(params)
      .subscribe((result) => {
        console.log(result);
      });
  }

  private _init(): void {
    this._searchProjects({
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
    this._searchProjects(searchParam);
  }
}
