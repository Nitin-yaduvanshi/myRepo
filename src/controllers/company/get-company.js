function makeGetCompanyAction({
getCompany,
InternalServerError
}){
    return async function getCompanyAction(){
        try{
            const result = await getCompany()
            res.status(200).send(result)
        }catch(err){
            if(!err.statusCode){
                err = new InternalServerError(err.message)
            }
            res.status(err.statusCode).send(err.message)
        }
    }
}
module.exports = makeGetCompanyAction