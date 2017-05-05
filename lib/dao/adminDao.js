"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================

const _ = require('lodash');

//========================== Load internal modules ====================

//========================== Load Modules End ==============================================


//=============================Define Methods Start=================================================

function addDriver(driverDetails) {
    let value = _.pick(driverDetails, ['firstName','lastName','licenseId','streetAddress','apartment','city','state','zipCode','phoneNumber','emergencyContactNumber','emailAddress']);
    return Promise.resolve(value);

}


//=============================Define Methods End=================================================

//========================== Export Module Start ==============================

module.exports = {

    addDriver

};

//========================== Export Module End ===============================
