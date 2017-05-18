"use strict";

//========================== Load Modules Start =======================
const superAdminRouter = require("express").Router(),
    _ = require('lodash'),
    Promise = require('bluebird');

//========================== Load internal modules ====================

// Load admin facade
const superAdminFacade = require('../facade/superAdminFacade'),
    resHndlr = require('../resHandler'),
    constants = require('../constants');

//========================== Load Modules End ==============================================

//========================== Define Routes Start ==============================================

//Login API
superAdminRouter.route("/gloginsuccess")
    .get([],
        function (req, res) {
            let loginDetail = _.pick(req.query, ['email']);
            superAdminFacade.glogin(loginDetail)
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, result);
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                });
        });

//List of Admin API for SuperAdmin
superAdminRouter.route("/listOfAdmins")
    .get([],
        function (req, res) {
            superAdminFacade.listOfAdmin()
                    .then(function (result) {
                        resHndlr.sendSuccessWithMsg(res, result);
                    })
                    .catch(function (err) {
                        resHndlr.sendError(res, err);
                    })
            });

//Edit roles of Admins
superAdminRouter.route("/editAdmin")
    .post([],
        function (req, res) {
            let adminDetail =_.pick(req.body, ['email','role']);
            superAdminFacade.editAdmin(adminDetail)
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, "success");
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                })
        });

//Delete admin
superAdminRouter.route("/deleteAdmin")
    .post([],
        function (req, res) {
            let deleteDetail =_.pick(req.body, ['email']);
            superAdminFacade.deleteAdmin(deleteDetail)
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, "success");
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                })
        });


//========================== Define Routes End ==============================================

//===========================Private Methods Start===========================================

//===========================Private Methods End==============================================


//========================== Export Module Start ==============================

module.exports = superAdminRouter;

//========================== Export Module End ===============================
