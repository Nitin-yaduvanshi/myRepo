const { connection } = require("..");
const DatabaseError = require("../../exceptions/database-error");
const makeUserDb = require("./user-db");

const userDb = makeUserDb({connection,DatabaseError})
module.exports = userDb