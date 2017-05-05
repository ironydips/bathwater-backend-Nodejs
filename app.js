"use strict";

//--Import Config----

const config = require('./lib/config');

// load external modules
const express = require("express");

// init express app
const  app = express();

// set server home directory
app.locals.rootDir =  __dirname;

//express config
config.expressConfig(app, config.env);

//App Routing
require("./lib/routes")(app);

//start server
app.listen(config.env.appPort, ()=>{
    console.log(`Express server listening on ${config.env.appPort}, in ${config.env.TAG} mode`);
});