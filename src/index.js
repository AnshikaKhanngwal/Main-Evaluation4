import express from "express";
import customerRoutes from "./routes/customerRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server Running" });
});

app.use("/api", customerRoutes);
app.use("/api", orderRoutes);

app.listen(8080, () => console.log("Server started on 8080"));