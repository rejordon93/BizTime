// companies.js

import db from "../db.js";

export const allcompanies = async (req, res) => {
  const result = await db.query(`SELECT * FROM companies`);
  return res.json(result.rows);
};
