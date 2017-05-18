/**
 * Created by nitish
 */
"use strict";

/**
 * Timeslot
 *
 * @module      :: Model
 * @description :: Represent data model for the Timeslots
 */

//========================== Load Modules Start ==========================

//========================== Load External Modules ==========================

let dynamoose = require("dynamoose");
let appConst = require("../constants");

//========================== Load Internal Modules ==========================

//========================== Load Modules End ==========================

let Schema = dynamoose.Schema;

/**
 * Timeslot Schema
 */
let timeslotSchema = new Schema(
    {
        timeslotID: String,
        date: String,
        timeslot: String,
        availabilityCount: Number,
    }
);


module.exports = dynamoose.model(appConst.DB_TABLES.TIMESLOT, timeslotSchema);
