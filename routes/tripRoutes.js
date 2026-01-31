import express from "express";
import { registerCustomer } from "./controllers/tripController.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "Customer route working" });
});

router.post("/tripRoutes", user);

export default router;
