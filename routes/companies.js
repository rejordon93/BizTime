import express from "express";
import { allcompanies } from "../controllers/companies.js";

const router = express.Router();

let companies = [];

router.get("/", allcompanies);

export default router;
