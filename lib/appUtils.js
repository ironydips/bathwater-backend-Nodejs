/**
 * Created by akanksha on 4/5/17.
 */
"use strict";

//---------Load Module Start--------------------------------------------------------------------

//---------Load External Module Start-----------------------------------------------------------


//---------Load External Module End-------------------------------------------------------------
//---------Load Internal Module Start-----------------------------------------------------------


//---------Load Internal Module End-------------------------------------------------------------

function getNodeEnv() {
    return process.env.NODE_ENV;
}

//---------Load Module End-------------------------------------------------------------------

//Export Config Module
module.exports = {
    getNodeEnv
}