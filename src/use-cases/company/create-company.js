function makeCerateCompany({
  Joi,
companyDb,
ValidationError
}){
    return async function createCompany({name}){
        try{
         const value = inputDataValidation({name})
         await companyDb.createCompany({name:mapValueFieldNames.name})
        }catch (err) {
            throw err
        }
    }
    function inputDataValidation({name}){
      Joi.object({
        name : Joi.string().trim().min(6).max(12).required()
      })
      const {error,value} = schema.validate({name})
      if(error){
         throw new ValidationError(error)
      }else{
        return value
      }
    }
}
module.exports = makeCerateCompany