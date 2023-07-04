class AuthenticationError extends Error{
    constructor(...params){
        super(...params)
        if(Error.captureStackTrace){
            Error.captureStackTrace(this,AuthenticationError)
        }
        this.name = "AUTHENTICATION_ERROR"
        this.statusCode = 401
    }
}
module.exports = AuthenticationError