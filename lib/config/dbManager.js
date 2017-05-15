"use strict";

/**
 * All Db's connection is handle via this manager.
 * @type {*}
 */
//=================================== Load Modules start ===================================

//=================================== Load external modules=================================
const dynamoose = require('dynamoose'),
    appUtils = require('../appUtils'),
    https = require('https');
//Import logger
// const logger = require("../logger");
// plugin bluebird promise in mongoose
dynamoose.Promise = require('bluebird');

//=================================== Load Modules end =====================================


// Connect to Db
function connectDb(env, callback) {
  dynamoose.AWS.config.update({
            accessKeyId: appUtils.getDBCredentials().accessKeyId,
            secretAccessKey: appUtils.getDBCredentials().secretAccessKey,
            region: appUtils.getDBCredentials().region,
            httpOptions:{
                agent: new https.Agent({
                    keepAlive: true
                })
            }
        });
  callback();
}

module.exports = {
  connectDb
};
