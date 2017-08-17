
declare module Form {
  export interface LoginForm {
    loginName: string,
    loginPassword: string,
  }
}

declare module "form" {
  export = Form;
}
