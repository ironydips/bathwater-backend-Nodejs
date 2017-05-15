"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================

const Promise = require("bluebird");
const _ = require("lodash");

//========================== Load internal modules ====================

// Load user service
const adminService = require('../services/adminService');
//Load JWt Service
const jwtHandler = require('../jwtHandler');
let exceptions = require("../customExceptions");
const constants = require('../constants');


//========================== Load Modules End ==============================================


//========================== Export Module Start ===========================

module.exports = {
    getDrivers: adminService.getDrivers
};

//========================== Export module end ==================================
