/**
 * Created by nitish
 */
"use strict";

/**
 * PromoCode
 *
 * @module      :: Model
 * @description :: Represent data model for the PromoCodes
 */

//========================== Load Modules Start ==========================

//========================== Load External Modules ==========================

let dynamoose = require("dynamoose");
let appConst = require("../constants");

//========================== Load Internal Modules ==========================

//========================== Load Modules End ==========================

let Schema = dynamoose.Schema;

/**
 * PromoCode Schema
 */
let promoCodeSchema = new Schema(
    {
        //zipCode: String,
    }
);


//module.exports = dynamoose.model(appConst.DB_TABLES.PROMOCODE, promoCodeSchema);
