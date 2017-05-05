/**
 * Created by Supriya on 4/5/17.
 */
"use strict";
//---------Load Module Start--------------------------------------------------------------------

//---------Load External Module Start-----------------------------------------------------------

//---------Load External Module End-------------------------------------------------------------
//---------Load Internal Module Start-----------------------------------------------------------

const appUtil = require('../../appUtils');

//---------Load Internal Module End-------------------------------------------------------------

const env = (() => {
        let Config;
switch (appUtil.getNodeEnv()) {
    case 'dev':
    case 'development':
        Config = require('./dev');
        break;
    case 'stag':
    case 'staging':
        Config = require('./staging');
        break;
    case 'prod':
    case 'production':
        Config = require('./prod');
        break;
    case 'local':
        Config = require('./local');
        break;
    default:
        Config = require('./default');

}
let config = new Config();
    return config.getConfigs();
})();

//---------Load Module End-------------------------------------------------------------------

//Export Config Module
module.exports = env;
