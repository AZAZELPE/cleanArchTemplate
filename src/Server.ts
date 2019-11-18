import { ExpressApp } from './app/index';
import { Http } from './data/infrastructure/http/index';
import { DataBases } from './data/infrastructure/db/index';
import { Repositories } from './data/repositories/index';
import { Services } from './domain/use-cases/index';
import { Controllers } from './app/controllers/index';
import { Configuration } from './configuration';

class Server {
  config = new Configuration();
  http = new Http(this.config)
  databases = new DataBases(this.config);
  repositories = new Repositories(this.databases, this.http)
  services = new Services(this.repositories)
  controllers = new Controllers(this.services)
  app = new ExpressApp(this.controllers)

  run() {
    this.app.configure();
    this.app.start();
  }
}

const server = new Server();
server.run();