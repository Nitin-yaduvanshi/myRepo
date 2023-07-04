function makeDeleteCompanyAction({
deleteCompany,
InternalServerError
}){
    return async function deleteCompanyAction(req,res){
       try{
        await deleteCompany({id:req.params.id})
        res.status(204),send('')
       }catch(err){
        if(!err.statusCode){
            err = new InternalServerError(err.message)
        }
        res.status(err.statusCode).send(err.message)
       }
    }
}
module.exports = makeDeleteCompanyAction