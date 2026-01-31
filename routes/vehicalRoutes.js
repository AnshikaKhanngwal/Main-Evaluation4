import express from "express";
import { registerCustomer } from "./controllers/vehicalController.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "Customer route working" });
});

router.post("/vehicalRoutes", user);

export default router;