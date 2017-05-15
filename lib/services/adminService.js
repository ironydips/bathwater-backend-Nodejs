"use strict";

//========================== Load Modules Start =======================


//========================== Load internal modules ====================

// Load admin dao
const adminDao = require("../dao/adminDao");
const _ = require("lodash");

//========================== Load Modules End ==============================================

//========================== Export Module Start ==============================

module.exports = {
    getDrivers: adminDao.getDrivers
};

//========================== Export Module End ===============================
