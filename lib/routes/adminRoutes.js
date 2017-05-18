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

//Get all Driver API
adminRouter.route("/getDrivers")
    .get([],
        function (req, res) {
            let options = _.pick(req.query, ['lastKey','limit']);
            console.log(options)
            adminFacade.getDrivers({}, options)
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, result);
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                });
        });

//Add Driver API
adminRouter.route("/addDriver")
    .post([],
        function (req, res) {
            let driverDetail = _.pick(req.body,['firstName','lastName','licenseId','streetAddress','apartment','city','state','zipCode','phoneNumber','emergencyContactNumber','emailAddress']);
            adminFacade.addDriver(driverDetail)
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, result);
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                });
        });

//Get all Truck API
adminRouter.route("/getTrucks")
    .get([],
        function (req, res) {
            adminFacade.getTrucks()
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, result);
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                });
        });

//Get all Zip Code API
adminRouter.route("/getZipCodes")
    .get([],
        function (req, res) {
            adminFacade.getZipCodes()
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, result);
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                });
        });

//Add ZipCode API
adminRouter.route("/addZipCode")
    .post([],
        function (req, res) {
            let zipCodeDetail = _.pick(req.body,['zipCode']);
            adminFacade.addZipCode(zipCodeDetail)
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, result);
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                });
        });

//Get all PromoCode API
adminRouter.route("/getPromoCodes")
    .get([],
        function (req, res) {
            adminFacade.getPromoCodes()
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, result);
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                });
        });

//Get Timeslot API
adminRouter.route("/getTimeslot")
    .get([],
        function (req, res) {
            adminFacade.getTimeslot()
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, result);
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                });
        });

adminRouter.route('/createTimeSlotsRange')
    .post([],
          function (req,res) {
          let timeSlot = _.pick(req.body, ['timeSlotData'])
          adminFacade.createTimeslot(timeSlot)
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