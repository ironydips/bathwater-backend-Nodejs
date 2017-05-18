"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================

const Promise = require("bluebird");
const _ = require("lodash");
const base64 = require('base-64');
const randomstring = require("randomstring");
//========================== Load internal modules ====================

// Load user service
const superAdminService = require('../services/superAdminService');
//Load JWt Service
const jwtHandler = require('../jwtHandler');
let exceptions = require("../customExceptions");
const constants = require('../constants');


//========================== Load Modules End ==============================================
function glogin(loginDetail) {
     return superAdminService.glogin(loginDetail)
        .then(function (result) {
            let token =result.token;
            if(token == null){
                token = randomstring.generate(5);
            }
            let str = result.email + ":" + result.id + ":" + result.role + ":" + token;
            //Encoded key
            result.key = base64.encode(str);
            return result;
        }).catch(function (err) {
            resHndlr.sendError(res, err);
        });
}

function editAdmin(data) {
    return superAdminService.editAdmin(data)
}

function deleteAdmin(data) {
    return superAdminService.deleteAdmin(data)
}

//========================== Export Module Start ===========================

module.exports = {
    glogin,
    listOfAdmin: superAdminService.listOfAdmin,
    editAdmin,
    deleteAdmin
};

//========================== Export module end ==================================
