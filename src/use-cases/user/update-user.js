function makeUpdateUser({
Joi,
userDb,
ValidationError
}){
    return async function updateUser({id,name,email,mobile,password,companyId}){
    try {
        const value = await inputDataValidation({id,name,email,mobile,password,companyId})
        await userDb.updateUser({id:value.id,name:value.name,email:value.email,mobile:value.mobile,password:value.password,companyId:value.companyId})
    } catch (error) {
        throw error 
    }
    }
    function inputDataValidation({id,name,email,mobile,password,companyId}){
        Joi.object({
            id:Joi.number().required(),
            name:Joi.string().trim().min(6).max(12).required(),
            email:Joi.string().email().required(),
            mobile:Joi.number().required(),
            password:Joi.string().min(6).required(),
            companyId: Joi.number().required()
        })
        const {error,value} = schema.validate({id,name,email,mobile,password,companyId})
        if(error){
            throw new ValidationError(error)
        }else{
            return value
        }
    }
}
module.exports = makeUpdateUser