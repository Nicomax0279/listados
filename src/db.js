import { Sequelize } from "sequelize";
import { config } from "./config.js"

const db = new Sequelize(config.DBNAME,config.DBUSER,config.DBPASS,{
    host :config.DBHOST,
    dialect:'mysql'
});

export default db;