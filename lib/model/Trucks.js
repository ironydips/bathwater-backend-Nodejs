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
 * Truck Schema
 */
let truckSchema = new Schema(
    {
        truckID: String,
        truckType: String,
        dealerName: String,
        leaseExpiration: String,
        licensePlate: String,
        dealerAddress: String,
        status: String
    }
);


module.exports = dynamoose.model(appConst.DB_TABLES.TRUCKS, truckSchema);
