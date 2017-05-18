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
 * Glogin Schema
 */
let gloginSchema = new Schema(
    {
        email: String,
        id: String,
        name: String,
        role: String,
        token: String,
    }
);


module.exports = dynamoose.model(appConst.DB_TABLES.Glogin, gloginSchema);
