import express from "express";
import { registerCustomer } from "./controllers/userController.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "Customer route working" });
});

router.post("/userRoutes", user);

export default router;