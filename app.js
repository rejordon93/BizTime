// /** BizTime express application. */

// import express from "express";

// const app = express();
// import ExpressError from "./expressError.js";

// app.use(express.json());

// import uRoutes from "../biztime/routes/companies.js";
// app.use("/companies", uRoutes);

// /** 404 handler */

// app.use(function (req, res, next) {
//   const err = new ExpressError("Not Found", 404);
//   return next(err);
// });

// /** general error handler */

// app.use((err, req, res, next) => {
//   res.status(err.status || 500);

//   return res.json({
//     error: err,
//     message: err.message,
//   });
// });

// module.exports = app;
