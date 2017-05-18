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

function addDriver(data) {
    return adminService.addDriver(data);
}
function getDrivers(data,options) {
   return adminService.getDrivers(data,options);
}
function addZipCode(query) {
    return adminService.addZipCode(query);
}
function createTimeslot(query) {
    return adminService.createTimeslot(query);
}

//========================== Export Module Start ===========================

module.exports = {
    addDriver,
    getTrucks:adminService.getTrucks,
    getDrivers,
    getZipCodes: adminService.getZipCodes,
    addZipCode,
    getTimeslot: adminService.getTimeslot,
    createTimeslot
};

//========================== Export module end ==================================
