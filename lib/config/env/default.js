/**
 * Created by Supriya on 4/5/17.
 */
"use strict";
//------------------------Class Definition----------------------------

class DefaultConfig{

    constructor(){
        this.TAG = "local";
        //Server Port
        this.appPort = 3002;
        this.hostName = "localhost";
    }

    getConfigs(){
        return this;
    }
}

//Export Module

module.exports = DefaultConfig;
