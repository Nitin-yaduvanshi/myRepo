function makeCreateCompanyAction({
createCompany,
InternalServerError
}){
    return async function createCompanyAction(req,res){
        try{
            await createCompany({name:req.body.name}) 
            res.status(201).send('company created')
        }catch(err){
            if(!err.statusCode){
              err = new InternalServerError(err.message)
            }
            res.status(err.statusCode).send(err.message)
        }
    }
}
module.exports = makeCreateCompanyAction