import { HttpResponse } from './../entities/HttpResponse';
import { HttpRequest } from './../entities/HttpRequest';

export interface ControllersGateway {
  getExample(r: HttpRequest): HttpResponse
}