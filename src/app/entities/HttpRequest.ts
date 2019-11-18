import { ParamsDictionary, Request } from "express-serve-static-core";

export class HttpRequest implements IHttpRequest {
  params: ParamsDictionary;
  body: any

  constructor(r: Request){
    this.body = r.body;
    this.params = r.params;
  }

}

interface IHttpRequest {
  body: any;
  params: ParamsDictionary;
}