const InternalServerError = require("../../exceptions/internal-server-error");
const { createCompany, deleteCompany, getCompany, updateCompany } = require("../../use-cases");

const makeCreateCompanyAction = require("./create-company");
const createCompanyAction = makeCreateCompanyAction({createCompany,InternalServerError})

const makeDeleteCompanyAction = require("./delete-company");
const deleteCompanyAction = makeDeleteCompanyAction({deleteCompany,InternalServerError})

const makeGetCompanyAction = require("./get-company");
const getCompanyAction = makeGetCompanyAction({getCompany,InternalServerError})

const makeUpdateCompanyAction = require("./update-company");
const updateCompanyAction = makeUpdateCompanyAction({updateCompany,InternalServerError})
module.exports = Object.freeze({
    createCompanyAction,
    deleteCompanyAction,
    getCompanyAction,
    updateCompanyAction
})