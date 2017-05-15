/**
 * Created by tushar on 17/12/16.
 */
//========================== Load Modules Start =======================


//========================== Load internal modules ====================

// Load user routes
const adminRouter = require('./adminRoutes');

// Load response module
const resHndlr = require('../resHandler');

//========================== Load Modules End ==============================================

//========================== Export Module Start ==============================

module.exports = function (app) {
  // Attach User Routes
  app.use('/api/admin', adminRouter);

  // Add routes above error handler
  // Attach ErrorHandler to Handle All Errors
  //app.use(resHndlr.hndlError);
  console.log("routes attached");
};

//========================== Export Module End ===============================
