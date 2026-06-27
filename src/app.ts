import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import packageJson from "../package.json" with { type: "json" };
import { mountApi } from "./api.js";
import { welcomePage } from "./views/welcome-page.js";

dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

mountApi("/api/v1", app);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../../public")));

app.get("/", (_req, res) => {
  res.send(welcomePage());
});

app.get("/ping", (_req, res) => {
  res.send(`${packageJson.name} ${packageJson.version}`);
});

export { app };
