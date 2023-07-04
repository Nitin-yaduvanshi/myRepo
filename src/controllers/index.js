const { createCompanyAction, deleteCompanyAction, getCompanyAction, updateCompanyAction } = require("./company");
const { userLoginAction, updateUserAction, getUserAction, deleteUserAction, createUserAction } = require("./user");


module.exports = Object.freeze({
    createCompanyAction,
    deleteCompanyAction,
    getCompanyAction,
    updateCompanyAction,
    userLoginAction,
    updateUserAction,
    getUserAction,
    deleteUserAction,
    createUserAction
})