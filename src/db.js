import { createPool } from "mysql2/promise";
import database from "./key.js";

const pool = createPool(database.database);



pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.log("DATABASE CONNECTION WAS CLOSED // PROTOCOL_CONNECTION_LOST");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.log("DATABASE CONNECTION WAS CLOSED // ER_CON_COUNT_ERROR");
    }
    if (err.code === "ECONNREFUSED") {
      console.log("DATABASE CONNECTION WAS CLOSED // ECONNREFUSED");
    }
  }

  if (connection) connection.release();
  console.log("DB is Connected");
  return;
});

export default pool;
