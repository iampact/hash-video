
declare module ConfObject {
  export interface ConfUiObject {
    CONFUI_ITEM: string,
    CONFUI_VALUE: string,
    CONFUI_DISP: string,
    CONFUI_IMG: string,
    CONFUI_ORDER: number,
    CONFUI_DESC: string,
    CONFUI_VISIBLE: number | boolean,
    CONFUI_ISSTATIC: number | boolean
  }
}

declare module "conf" {
  export = ConfObject;
}
