function makeGetUserAction({
getUser,
InternalServerError
}){
    return async function getUserAction(req,res){
        try{
          const result = await getUser()
          res.status(200).send(result)
        }catch (err) {
            if(err.statusCode){
                err= new InternalServerError(err.message)
            }
            res.status(err.statusCode).send(err.message)
        }
    }
}
module.exports = makeGetUserAction