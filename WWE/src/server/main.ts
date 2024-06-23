import express from "express";
import ViteExpress from "vite-express";

const port = 3000;
const app = express();

app.get("/hello", (_, res) => {
    res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, port, () =>
    console.log(`Server is listening on http://localhost:${port}`),
);