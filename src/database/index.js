const sequelize = require('sequelize')
const admin = require('../app/models/admin')
const databaseConfig = ('../config/database')

const models = [admin];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

module.exports =  new Database();