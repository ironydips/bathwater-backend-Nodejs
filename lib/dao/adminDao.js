"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================

const _ = require('lodash');

//========================== Load internal modules ====================

const Drivers = require('../model/Drivers'),
  BaseDao = new require('../dao/baseDao'),
  driverDao = new BaseDao(Drivers),
  appUtils = require('../appUtils'),
  appConstants = require('../constants');


//========================== Load Modules End ==============================================

const SORT_BY = {
  name: 'profile.name',
  email: 'profile.email',
  country: 'profile.country',
  city: 'profile.city',
  address: 'profile.address',
  teamName: 'teams.profile.name'
};

//Define Projections
const PROJECTION = {
  ALL: {},
  BASIC_PROFILE: {
    _id: 1, chief: 1, disabled: 1, "profile.name": 1, "profile.email": 1, "profile.country": 1,
    "profile.city": 1, "profile.address": 1
  },
  COMPANY_DETAIL: {_id: 1, profile: 1, national: 1, salesId: 1, disabled: 1},
  ID: {_id: 1}
};

//=============================Define Methods Start=================================================

function getDrivers(driverID) {
 // let query = {driverID: driverID};
  return driverDao.scan();
}
//=============================Define Methods End=================================================

//========================== Export Module Start ==============================

module.exports = {
    getDrivers
};

//========================== Export Module End ===============================
