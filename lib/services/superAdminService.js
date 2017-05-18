"use strict";

//========================== Load Modules Start =======================


//========================== Load internal modules ====================

// Load admin dao
const superAdminDao = require("../dao/superAdminDao");
const _ = require("lodash");

//========================== Load Modules End ==============================================
function glogin(loginDetail) {
    return superAdminDao.glogin(loginDetail);
}

function editAdmin(data) {
    return superAdminDao.editAdmin(data);
}

function deleteAdmin(data) {
    return superAdminDao.deleteAdmin(data)
}
//========================== Export Module Start ==============================

module.exports = {
    glogin,
    listOfAdmin : superAdminDao.listOfAdmin,
    editAdmin,
    deleteAdmin
};

//========================== Export Module End ===============================
