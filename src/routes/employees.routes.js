import { Router } from "express";
import {
  getEmployees,
  createEmployees,
  deleteEmployees,
  updateEmployees,
  getEmployee,
} from "../controllers/employees.controller.js";
const router = Router();

router.get("/employees/:id", getEmployee);
router.get("/employees", getEmployees);
router.post("/employees", createEmployees);
// router.put("/employees/:id", updateEmployees);
router.patch("/employees/:id", updateEmployees);
router.delete("/employees/:id", deleteEmployees);

export default router;
