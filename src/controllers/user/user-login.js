function makeUserLoginAction({
userLogin,
InternalServerError
}){
    return async function userLoginAction(req,res){
        try{
          await userLogin({name:req.body.name,password:req.body.password})
          res.status(200).send('login Successfull')
        }catch (err) {
            if(err.statusCode){
                err= new InternalServerError(err.message)
            }
            res.status(err.statusCode).send(err.message)
        }
    }
}
module.exports = makeUserLoginAction