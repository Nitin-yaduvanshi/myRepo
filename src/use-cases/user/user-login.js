function makeUserLogin({
Joi,
userDb,
ValidationError,
AuthenticationError
}){
    return async function userLogin({name,password}){
        try {
            const value = await inputDataValidation({name,password})
            const result = await userDb.getPassword({name:value.name})
            if(result.password == value.password){
                return true
            }else{
                throw new AuthenticationError("incorrect user name and password")
            }
        } catch (error) {
            throw error
        }
    }
    function inputDataValidation({name,password}){
        Joi.object({
            name: Joi.string().trim().min(6).max(12).required(),
            password: Joi.string().min(6).required()
        })
        const {error,value} = schema.validate({name,password})
        if(error){
            throw new ValidationError(error)
        }else{
            return value
        }
    }
}
module.exports = makeUserLogin