"use strict";

//========================== Load Modules Start =======================


//========================== Load internal modules ====================

// Load company dao
const adminDao = require("../dao/adminDao");
const _ = require("lodash");

//========================== Load Modules End ==============================================

function addDriver(driverDetails) {
    return adminDao.addDriver(driverDetails);
}
//========================== Export Module Start ==============================

module.exports = {

    addDriver

};

//========================== Export Module End ===============================
