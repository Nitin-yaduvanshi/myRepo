function makeUpdateUserAction({
updateUser,
InternalServerError
}){
    return async function updateUserAction(req,res){
        try{
         await updateUser({
            id:req.params.id,
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mobile,
            password: req.body.password,
            companyId:req.body.companyId,
        })
        res.status (201).send("user updated")
       }catch (err) {
        if(err.statusCode){
            err= new InternalServerError(err.message)
        }
        res.status(err.statusCode).send(err.message)
    }
    }
}
module.exports = makeUpdateUserAction