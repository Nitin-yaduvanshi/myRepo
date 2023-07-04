function makeDeleteUserAction({
deleteUser,
InternalServerError
}){
    return async function deleteUserAction(req,res){
        try{
          await deleteUser({id:req.params.id})
          res.status(204).send()
        }catch (err) {
            if(err.statusCode){
                err= new InternalServerError(err.message)
            }
            res.status(err.statusCode).send(err.message)
        }
    }
}
module.exports = makeDeleteUserAction