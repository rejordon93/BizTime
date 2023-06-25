import express from "express";
import bodyParser from "body-parser";
import ExpressError from "./expressError.js";
import db from "./db.js";

import { allcompanies } from "./routes/companies.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/companies", allcompanies);

app.get("/", (req, res) => res.send(`Welcome Page`));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
