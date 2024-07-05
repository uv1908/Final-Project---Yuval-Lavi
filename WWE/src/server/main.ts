import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";
import superstarsRouter from "./routes/superstarsRoute.js";
import brandsRouter from "./routes/brandsRoute.js";
import usersRouter from "./routes/usersRoute.js";
import { globalErrorHandler } from "./handlers/errorHandler.js";

const app = express();
app.use(express.json());
app.use(bodyParser.json());

const port = 3000;

app.use("/api/superstars", superstarsRouter);
app.use("/api/brands", brandsRouter);
app.use("/api/users", usersRouter);

app.use(globalErrorHandler);

ViteExpress.listen(app, port, () =>
    console.log(`Server is listening on http://localhost:${port}`),
);