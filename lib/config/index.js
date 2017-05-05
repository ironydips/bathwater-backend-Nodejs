/**
 * Created by akanksha on 4/5/17.
 */
"use strict";

//---------Load Module Start--------------------------------------------------------------------

//---------Load External Module Start-----------------------------------------------------------


//---------Load External Module End-------------------------------------------------------------
//---------Load Internal Module Start-----------------------------------------------------------

        const env = require('./env');
        const  expressConfig = require('./expressConfig');

//---------Load Internal Module End-------------------------------------------------------------



//---------Load Module End-------------------------------------------------------------------

//Export Config Module
module.exports = {
        env,
        expressConfig
};