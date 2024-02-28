import morgan from "morgan";
import express from "express";
import cors from "cors";

import dalleRoutes from "../routes/dalle.routes";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" });
});

export default app;
