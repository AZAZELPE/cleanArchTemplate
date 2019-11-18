import { HttpGateway } from "./../interfaces/HttpGateway";
import { Configuration } from "../../../configuration";
export class Http implements HttpGateway {

  config: Configuration

  constructor(c: Configuration) {
    this.config = c;
  }
  
  exampleHttp() {
    throw new Error("Method not implemented.");
  }
}
