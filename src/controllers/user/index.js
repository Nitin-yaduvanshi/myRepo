const InternalServerError = require("../../exceptions/internal-server-error");
const { createUser, deleteUser, updateUser, userLogin, getUser } = require("../../use-cases");

const makeCreateUserAction = require("./create-user");
const createUserAction = makeCreateUserAction({createUser,InternalServerError})

const makeDeleteUserAction = require("./delete-user");
const deleteUserAction = makeDeleteUserAction({deleteUser,InternalServerError})

const makeGetUserAction = require("./get-user");
const getUserAction = makeGetUserAction({getUser,InternalServerError})

const makeUpdateUserAction = require("./update-user");
const updateUserAction = makeUpdateUserAction({updateUser,InternalServerError})

const makeUserLoginAction = require("./user-login");
const userLoginAction = makeUserLoginAction({userLogin,InternalServerError})

module.exports = Object.freeze({
    createUserAction,
    deleteUserAction,
    getUserAction,
    updateUserAction,
    userLoginAction
})