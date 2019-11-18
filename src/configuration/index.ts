import dotenv from 'dotenv'

export class Configuration {
  constructor() {
    dotenv.config()
  }

  getExampleDatabaseConfig() {
    return {
      user: process.env.EXAMPLE_DB_USER,
      pass: process.env.EXAMPLE_DB_PASS,
      con: process.env.EXAMPLE_DB_CON,
    }
  }

  getExampleHttpConfig() {
    return {
      baseUrl: process.env.EXAMPLE_HTTP_BASE_URL,
      token: process.env.EXAMPLE_HTTP_TOKEN,  
    }
  }
}
