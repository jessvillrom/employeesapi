import {
  DB_PORT,
  DB_DATABASE,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
} from "./config.js";

export default {
  database: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT,
  },
};
