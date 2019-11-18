import { DataGateway } from './../interfaces/DataGateway';
import { ServicesGateway } from './../interfaces/ServicesGateway';

export class Services implements ServicesGateway {

  dataGateway: DataGateway

  constructor(dg: DataGateway) {
    this.dataGateway = dg;
  }

  async requestExample() {
    throw new Error("Method not implemented.");
  }
}