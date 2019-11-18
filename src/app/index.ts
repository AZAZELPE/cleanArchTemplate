import express, { Application } from "express";
import { ControllersGateway } from "./interfaces/ControllersGateway";
import { HttpRequest } from "./entities/HttpRequest";

export class ExpressApp {
  app: Application = express();
  controllers: ControllersGateway;

  constructor(controllers: ControllersGateway) {
    this.controllers = controllers;
  }

  configure() {
    this.app.get('/', (req, res) => {
      return this.controllers.getExample(new HttpRequest(req)).send(res);
    })
  }

  start() {
    this.app.listen(8080,'test');
  }
}
