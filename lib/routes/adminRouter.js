/**
 * Created by akanksha on 4/5/17.
 */
"use strict";

//---------Load Module Start--------------------------------------------------------------------

//---------Load External Module Start-----------------------------------------------------------
const adminRouter = require("express").Router(),_ = require("lodash"), Promise =require("bluebird");

//---------Load External Module End-------------------------------------------------------------
//---------Load Internal Module Start-----------------------------------------------------------

// Load admin facade
const adminFacade = require('../facade/adminFacade'),
    resHndlr = require('../resHandler');

//---------Load Internal Module End-------------------------------------------------------------

//---------Load Module End-------------------------------------------------------------------

adminRouter.route("/driver/addDriver")
    .post([],
        function (req,res) {
        let driverData = _.pick(req.body, ['firstName','lastName','licenseId','streetAddress','apartment','city','state','zipCode','phoneNumber','emergencyContactNumber','emailAddress']);
            adminFacade.addDriver(driverData)
                .then(function (result) {
                    resHndlr.sendSuccessWithMsg(res, result);
                })
                .catch(function (err) {
                    resHndlr.sendError(res, err);
                });
    });

//Export  Module Start

module.exports = adminRouter;

//Export  Module End