"use strict";

//========================== Load Modules Start =======================
const adminRouter = require("express").Router(),
  _ = require('lodash'),
  Promise = require('bluebird');

//========================== Load internal modules ====================

// Load admin facade
const adminFacade = require('../facade/adminFacade'),
  resHndlr = require('../resHandler'),
  constants = require('../constants');

//========================== Load Modules End ==============================================

//========================== Define Routes Start ==============================================

const pageSort = ['pageSize', 'pageNo', 'sortBy', 'sortOrder'];

adminRouter.route("/getDrivers")
  .get([],
    function (req, res) {
     // let driver = _.pick(req.query, ['driverID']);
      adminFacade.getDrivers()
        .then(function (result) {
            resHndlr.sendSuccessWithMsg(res, result);
        })
        .catch(function (err) {
          resHndlr.sendError(res, err);
        });
    });

//========================== Define Routes End ==============================================

//===========================Private Methods Start===========================================

//===========================Private Methods End==============================================


//========================== Export Module Start ==============================

module.exports = adminRouter;

//========================== Export Module End ===============================
