function makeUpdateCompany({
    Joi,
companyDb,
ValidationError
}){
    return async function updateCompany({name}){
        try {
            const value = await inputDataValidation({name})
            await companyDb.updateCompany({name:value.name})
        } catch (error) {
            throw error
        }
    }
    function inputDataValidation({name}){
        Joi.object({
            name:Joi.string().trim().min(6).max(12).required()
        })
        const {error,value} = schema.validate({name})
        if(error){
            throw new ValidationError(error)
        }else{
            return value 
        }
    }
}
module.exports = makeUpdateCompany