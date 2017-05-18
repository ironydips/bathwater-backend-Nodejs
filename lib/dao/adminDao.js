"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================

const _ = require('lodash');

//========================== Load internal modules ====================

const Driver = require('../model/Drivers'),
    Truck = require('../model/Trucks'),
    ZipCode = require('../model/ZipCodes'),
    PromoCode = require('../model/PromoCodes'),
    TimeSlot = require('../model/TimeSlot'),
    BaseDao = new require('../dao/baseDao'),
    driverDao = new BaseDao(Driver),
    truckDao = new BaseDao(Truck),
    zipCodeDao = new BaseDao(ZipCode),
    timeSlotDao = new BaseDao(TimeSlot),
    promoCodeDao = new BaseDao(PromoCode),
    appUtils = require('../appUtils'),
    appConstants = require('../constants');


//========================== Load Modules End ==============================================

//=============================Define Methods Start=================================================
//Get Drivers
function getDrivers(query, options) {
    options.limit = options.limit || 30; // default pageSize limit = 30.
    options.ExclusiveStartKey = options.lastKey || null;

    return driverDao.scan(query, options);
}
//Add Driver
function addDriver(data) {
    return driverDao.add(data,{});
}
//Get Trucks
function getTrucks() {
    return truckDao.scan({},{});
}
//Get ZipCodes
function getZipCodes() {
    return zipCodeDao.scan({},{});
}
//Add Zipcode
function addZipCode(data) {
    return zipCodeDao.add(data,{});
}
function getPromoCodes() {
    return promoCodeDao.scan(data,{});
}
function getTimeslot() {
    return timeSlotDao.scan({},{});
}
function createTimeslot() {
    return timeSlotDao.add(data,{});
}
//=============================Define Methods End=================================================

//========================== Export Module Start ==============================

module.exports = {
    getDrivers,
    addDriver,
    getTrucks,
    getZipCodes,
    addZipCode,
    getPromoCodes,
    getTimeslot,
    createTimeslot
};

//========================== Export Module End ===============================