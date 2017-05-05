"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================

const _ = require('lodash');
const Promise = require('bluebird');

//========================== Load internal modules ====================
// Load admin service
const adminService = require('../services/adminService');

//========================== Load Modules End ==============================================
function addDriver(driverDetails) {
    return adminService.addDriver(driverDetails);
}


//========================== Export Module Start ==============================

module.exports = {

    addDriver

};

//========================== Export Module End ===============================
