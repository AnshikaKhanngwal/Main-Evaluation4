import express from "express";
import vehicalRoutes from "./routes/vehicalRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import tripRoutes from "./routes/tripRoutes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server Running" });
});

app.use("/api", vehicalRoutes);
app.use("/api", userRoutes);
app.use("/api", tripRoutes);

app.listen(8080, () => console.log("Server started on 8080"));