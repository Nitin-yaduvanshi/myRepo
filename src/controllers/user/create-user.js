function makeCreateUserAction({
createUser,
InternalServerError
}){
    return async function createUserAction(req,res){
        try{
           await createUser({
            name:req.body.name,
            email:req.body.email,
            mobile:req.body.mobile,
            password:req.body.password,                                                                                                                                                                                                                                                                                             
            companyId:req.body.companyId
        })
        res.status(201).send('user Created')
        }catch (err) {
            if(err.statusCode){
                err= new InternalServerError(err.message)
            }
            res.status(err.statusCode).send(err.message)
        }
    }
}
module.exports = makeCreateUserAction