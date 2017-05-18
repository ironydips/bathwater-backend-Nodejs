"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================

const _ = require('lodash');

//========================== Load internal modules ====================

const Glogin = require('../model/SuperAdmin'),
    BaseDao = new require('../dao/baseDao'),
    superAdminDao = new BaseDao(Glogin),
    appUtils = require('../appUtils'),
    appConstants = require('../constants');


//========================== Load Modules End ==============================================

//=============================Define Methods Start=================================================

function glogin(loginDetail) {
    return superAdminDao.get(loginDetail,{});
}

function listOfAdmin() {
    return superAdminDao.scan({},{});
}

function editAdmin(data) {

    let query = {email: data.email};
    let update = {$PUT: {role: data.role}};
    return superAdminDao.update(query, update);
}

function deleteAdmin(data) {
    return superAdminDao.delete(data,{})
}
//=============================Define Methods End=================================================

//========================== Export Module Start ==============================

module.exports = {
    glogin,
    listOfAdmin,
    editAdmin,
    deleteAdmin
};

//========================== Export Module End ===============================
