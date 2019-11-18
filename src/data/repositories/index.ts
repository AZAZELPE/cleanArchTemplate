import { HttpGateway } from './../infrastructure/interfaces/HttpGateway';
import { DatabaseGateway } from './../infrastructure/interfaces/DatabaseGateway';
import { DataGateway } from './../../domain/interfaces/DataGateway';

export class Repositories implements DataGateway {

  databaseGateway: DatabaseGateway
  httpGateway: HttpGateway

  constructor(dbG: DatabaseGateway, httpG: HttpGateway) {
    this.databaseGateway = dbG;
    this.httpGateway = httpG;
  }

  findExample() {
    this.databaseGateway.exampleDatabase
    throw new Error("Method not implemented.");
  }
}