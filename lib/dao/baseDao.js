"use strict";

//========================== Class Definitions Start =====================

class BaseDao {
  constructor(dbModel) {
    //Get Model
    this.Model = dbModel;
  }

  query(query, options){
    return this.Model.query(query,options).exec();
  }
  scan(){
    return this.Model.scan().exec();
  }

}
//========================== Class Definitions End =====================


//========================== Helper methods start =======================

//========================== Helper methods end =======================

//========================== Export module start =======================

module.exports = BaseDao;

//========================== Export module End =======================


