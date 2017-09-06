import {
  Component,
  OnInit
} from "@angular/core";

@Component({
  selector: "common-modal",
  templateUrl: "common/templates/common.modal.html",
  styleUrls: ["common/styles/common.modal.css"]
})
export class CommonModalCmp implements OnInit {

  title:string;
  contents:any;
  type:string;
  isConfirmModal:boolean;
  typeIconName:string;

  setTypeIconName () {
    switch (this.type) {
      case 'info':
        this.typeIconName = 'info_outline';
        break;
      case 'confirm':
        this.typeIconName = 'help_outline';
        break;
      case 'alert':
        this.typeIconName = 'error_outline';
        break;
      case 'error':
        this.typeIconName = 'warning';
        break;
    }
  }

  constructor(
  ) {
  }

  ngOnInit(): void {
    // is confirm modal
    this.isConfirmModal = this.type === 'confirm';
    // set type icon name
    this.setTypeIconName();
  }
}
