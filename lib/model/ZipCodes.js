/**
 * Created by nitish
 */
"use strict";

/**
 * ZipCode
 *
 * @module      :: Model
 * @description :: Represent data model for the ZipCodes
 */

//========================== Load Modules Start ==========================

//========================== Load External Modules ==========================

let dynamoose = require("dynamoose");
let appConst = require("../constants");

//========================== Load Internal Modules ==========================

//========================== Load Modules End ==========================

let Schema = dynamoose.Schema;

/**
 * ZipCode Schema
 */
let zipCodeSchema = new Schema(
    {
        zipCode: String,
    }
);


module.exports = dynamoose.model(appConst.DB_TABLES.ZIPCODE, zipCodeSchema);
