/**
 * Created by nitish
 */
"use strict";

/**
 * Drivers
 *
 * @module      :: Model
 * @description :: Represent data model for the Drivers
 */

//========================== Load Modules Start ==========================

//========================== Load External Modules ==========================

let dynamoose = require("dynamoose");
let appConst = require("../constants");

//========================== Load Internal Modules ==========================

//========================== Load Modules End ==========================

let Schema = dynamoose.Schema;

/**
 * Driver Schema
 */
let driverSchema = new Schema(
    {
        driverID: String,
        firstName: String,
        lastName: String,
        address: String,
        emailAddress: String,
        phoneNumber: String,
        emergencyContactNumber: String,
        licenseID: String,
        password: String,
        token: String,
        status: String
    }
);

//
// driverSchema.methods.toJSON = function () {
//   var obj = this.toObject();
//   delete obj.createdBy;
//   return obj;
// };
//
// driverSchema.pre("save", function (next) {
//   debugger;
//   this.driverID = dynamoose.Types.ObjectId().toString();
//   next();
// });

module.exports = dynamoose.model(appConst.DB_TABLES.DRIVERS, driverSchema);
