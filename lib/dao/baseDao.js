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
    scan(query, options){
        return this.Model.scan(query, options).exec();
    }
    //Get Query
    get(query, options){
        return this.Model.get(query);
    }

    //Delete Query
    delete(query,option){
        return this.Model.delete(query);
    }
    //Add Query
    add(query,option){
        //return this.Model.create(query);
    }
    //scan entire table
    scanAll(query,option){
        return this.Model.scan(query,option).all().exec();
    }
    //update query
      update(query, options){
       return this.Model.update(query, options);
      }

}
//========================== Class Definitions End =====================

//========================== Helper methods start =======================

//========================== Helper methods end =======================

//========================== Export module start =======================

module.exports = BaseDao;

//========================== Export module End =======================


