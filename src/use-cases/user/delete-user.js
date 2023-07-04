function makeDeleteUser({
Joi,
userDb,
ValidationError,
}){
    return async function deleteUser({id}){
        try {
            const value = inputDataValidation({id})
            await userDb.deleteUser({id})
        } catch (error) {
            
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
module.exports = makeDeleteUser