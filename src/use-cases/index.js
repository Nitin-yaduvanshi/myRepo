const { createCompany, deleteCompany, getCompany, updateCompany } = require("./company");
const { createUser, deleteUser, getUser, updateUser, userLogin } = require("./user");

module.exports = Object.freeze({
    createCompany,
    deleteCompany,
    getCompany,
    updateCompany,
    createUser,
    deleteUser,
    getUser,
    updateUser,
    userLogin,
})