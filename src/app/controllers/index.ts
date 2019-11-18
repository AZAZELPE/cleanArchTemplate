import { ServicesGateway } from './../../domain/interfaces/ServicesGateway';
import { ControllersGateway } from "../interfaces/ControllersGateway";
import { HttpRequest } from "../entities/HttpRequest";
import { HttpResponse } from "../entities/HttpResponse";

export class Controllers implements ControllersGateway {

  services: ServicesGateway

  constructor(s: ServicesGateway) {
    this.services = s;
  }

  async getExample(r: HttpRequest): Promise<HttpResponse> {
    throw new Error("Method not implemented.");
  }
}