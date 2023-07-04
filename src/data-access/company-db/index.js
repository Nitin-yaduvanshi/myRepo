const { connection } = require("..");
const DatabaseError = require("../../exceptions/database-error");
const makeCompanyDb = require("./company-db");

const  companyDb = makeCompanyDb({connection,DatabaseError})
module.exports = companyDb