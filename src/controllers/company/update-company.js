function makeUpdateCompanyAction({
updateCompany,
InternalServerError
}){
    return async function updateCompanyActiona(req,res){
        try {
            await updateCompany({id:req.params.id,name:req.body.name})
            res.status(201).send('company updated')
        } catch (err) {
            if(err.statusCode){
                err= new InternalServerError(err.message)
            }
            res.status(err.statusCode).send(err.message)
        }
    }
}
module.exports = makeUpdateCompanyAction