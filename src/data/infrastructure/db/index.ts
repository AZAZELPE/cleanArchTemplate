import { DatabaseGateway } from './../interfaces/DatabaseGateway';
import { Configuration } from '../../../configuration';
export class DataBases implements DatabaseGateway {

  config: Configuration

  constructor(c: Configuration) {
    this.config = c;
  }

  async exampleDatabase() {
    throw new Error("Method not implemented.");
  }
}