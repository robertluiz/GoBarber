const express = require("express");
const routes = request("./routes");

class App {
  constructor() {
    this.server = express();
  }

  middlewares() {
    this.server.use(express.json());
  }
  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
