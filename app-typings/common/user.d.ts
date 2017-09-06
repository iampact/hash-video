
declare module User {
  export interface UserInfo {
    user_id: string,
    user_name: string,
    user_sync: number,
    user_status: number,
    user_roleid: string,
    user_desc: string,
    user_created: string | number,
    user_company: string,
    user_dept: string,
    user_position: string,
    user_tel: string,
    user_mobile: string,
    user_email: string,
    user_address: string,
    user_expiretime: string,
    user_locale: string,
    user_timezone: string,
    user_apikey: string,
  }
}

declare module "user" {
  export = User;
}
