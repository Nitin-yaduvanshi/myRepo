const Joi = require("joi");
const { companyDb } = require("../../data-access");
const ValidationError = require("../../exceptions/validation-error");
const ObjectNotFoundError = require("../../exceptions/object-not-found-error");

const makeCerateCompany = require("./create-company");
const createCompany = makeCerateCompany({Joi,companyDb,ValidationError})

const makeDeleteCompany = require("./delete-company");
const deleteCompany = makeDeleteCompany({Joi,companyDb,ValidationError})

const makeGetCompany = require("./get-company");
const getCompany = makeGetCompany({Joi,companyDb,ObjectNotFoundError})

const makeUpdateCompany = require("./update-company");
const updateCompany = makeUpdateCompany({Joi,companyDb,ValidationError})

module.exports = Object.freeze({
    createCompany,
    deleteCompany,
    getCompany,
    updateCompany
})