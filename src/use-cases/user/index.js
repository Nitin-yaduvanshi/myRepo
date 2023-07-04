const Joi = require("joi")
const { userDb } = require("../../data-access")
const ValidationError = require("../../exceptions/validation-error")
const ObjectNotFoundError = require("../../exceptions/object-not-found-error")
const AuthenticationError = require("../../exceptions/authentication-error")

const makeCreateUser = require("./create-user")
const createUser = makeCreateUser({Joi,userDb,ValidationError})

const makeDeleteUser = require("./delete-user")
const deleteUser = makeDeleteUser({Joi,userDb,ValidationError})

const makeGetUser = require("./get-user")
const getUser = makeGetUser({userDb,ObjectNotFoundError})

const makeUpdateUser = require("./update-user")
const updateUser = makeUpdateUser({Joi,userDb,ValidationError})

const makeUserLogin = require("./user-login")
const userLogin = makeUserLogin({Joi,userDb,ValidationError,AuthenticationError})

module.exports = Object.freeze({
    createUser,
    deleteUser,
    getUser,
    updateUser,
    userLogin
})