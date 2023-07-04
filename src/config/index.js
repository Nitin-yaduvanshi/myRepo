const config = require("./backend-config");
const _ = require('lodash');
config.serviceEndpoints = require('./service-endpoints')
const seviceConfig = require("./service-config")
if(seviceConfig.mySql){
 config.mySql = _.assign(config.mySql,seviceConfig.mySql)
 delete seviceConfig.mySql
}
module.exports= config