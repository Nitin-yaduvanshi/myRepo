function makeDeleteCompany({
    Joi,
companyDb,
ValidationError
}){
    return async function deleteCompany({id}){
        try {
            const value = await inputDataValidation({id})
            await companyDb.deleteCompany({id:value.id})
        } catch (error) {
            throw error
        }
    }
    function inputDataValidation({id}){
        Joi.object({
            id: Joi.number().required()
        })
        const {error,value} = schema.validate({id})
        if(error){
            throw new ValidationError(error)
        }else{
            return value
        }
    }
}
module.exports = makeDeleteCompany