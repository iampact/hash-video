
import {
	Component
} from "@angular/core";

@Component({
	selector: "app",
	template: "<router-outlet></router-outlet>",
  styleUrls: ["app.css"],
})
export class App {

  ngOnInit() {
    this._init();
  }

  private _init(): void {

  }
}
