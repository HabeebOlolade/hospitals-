import express from "express";
import cors from "cors";

import hospitalRouter from "./routes/hospitals";
import professionalRouter from "./routes/professional";
import serviceRouter from "./routes/services";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", hospitalRouter);
app.use("/", professionalRouter);
app.use("/", serviceRouter);

export default app;
