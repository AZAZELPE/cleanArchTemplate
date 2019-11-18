import { ServicesGateway } from './../../domain/interfaces/ServicesGateway';
import { ControllersGateway } from "../interfaces/ControllersGateway";
import { HttpRequest } from "../entities/HttpRequest";
import { HttpResponse } from "../entities/HttpResponse";

export class Controllers implements ControllersGateway {

  services: ServicesGateway

  constructor(s: ServicesGateway) {
    this.services = s;
  }

  getExample(r: HttpRequest): HttpResponse {
    throw new Error("Method not implemented.");
  }
}