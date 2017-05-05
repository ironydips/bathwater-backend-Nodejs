/**
 * Created by akanksha on 4/5/17.
 */
"use strict";

//---------Load Module Start--------------------------------------------------------------------

//---------Load External Module Start-----------------------------------------------------------

//---------Load External Module End-------------------------------------------------------------
//---------Load Internal Module Start-----------------------------------------------------------

const adminRouter = require("./adminRouter");

//---------Load Internal Module End-------------------------------------------------------------

//---------Load Module End-------------------------------------------------------------------

//Export  Module Start
module.exports = function (app) {
  app.use("/admin", adminRouter);
};