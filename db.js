// db.js

import pkg from "pg";
const { Client } = pkg;

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql:///BizTime_test";
} else {
  DB_URI = "postgresql:///BizTime";
}

const db = new Client({
  connectionString: DB_URI,
});

db.connect();

export { db };
