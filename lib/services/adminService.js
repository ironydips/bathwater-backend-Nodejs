"use strict";

//========================== Load Modules Start =======================


//========================== Load internal modules ====================

// Load admin dao
const adminDao = require("../dao/adminDao");
const _ = require("lodash");

//========================== Load Modules End ==============================================
function addDriver(data) {
    return adminDao.addDriver(data);
}
function getDrivers(data,options) {
   return adminDao.getDrivers(data,options);
}
function addZipCode(query) {
    return adminDao.addZipCode(query);
}
function createTimeslot(query) {
    return adminDao.createTimeslot(query);
}
//========================== Export Module Start ==============================

module.exports = {
    getDrivers,
    addDriver,
    getTrucks: adminDao.getTrucks,
    getZipCodes: adminDao.getZipCodes,
    addZipCode,
    getTimeslot: adminDao.getTimeslot,
    createTimeslot
};

//========================== Export Module End ===============================
