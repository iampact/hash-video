
declare module Conf {
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

  export interface ConfObject {
    CONF_CATGRY: string,
    CONF_KEY: string,
    CONF_TYPE: number,
    CONF_VALUE: string,
    CONF_DISP: string,
    CONF_UNITDISP: string,
    CONF_ORDER: number,
    CONF_DESC: string,
    CONF_HELP: string,
    CONF_OPTIONS: string,
    CONF_WIDTH: number,
    CONF_LEN: number,
    CONF_MIN: number,
    CONF_MAX: number,
    CONF_PARENT_KEY: string,
    CONF_PARENT_VALUE: string,
    CONF_RELATION_KEY: string,
    CONF_RELATION_VALUE: string,
    CONF_REFLINK: string,
    CONF_VISIBLE: number,
    CONF_ISSTATIC: number
  }
}

declare module "conf" {
  export = Conf;
}
