import express from "express";
import ruta from "./routes/index.routes.js";
import employeeRoute from "./routes/employees.routes.js";
import { PORT } from "./config.js";

const app = express();

app.use(express.json());

app.use(ruta);

app.use("/api", employeeRoute);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint no found",
  });
});

app.listen(PORT);
console.log("Server runnin on port Mother Fucker", PORT);
