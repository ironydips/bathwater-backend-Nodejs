/**
 * Created by akanksha on 4/5/17.
 */
"use strict";

//---------Load Module Start--------------------------------------------------------------------

const bodyParser = require("body-parser");//Parse information from post

//---------Load Module End-------------------------------------------------------------------

//Export Config Module
module.exports = function(app, env){


    app.use(bodyParser.json());//Parse json/application bodies
    //Parse application/x-www-form-urlencoded bodies and extended false for allowing non json data as well
    app.use(bodyParser.urlencoded({extended: false}));

    if(!app.locals.rootDir){
        //throw error;
    }

};