class ValidationError extends Error{
    constructor(...params){
        super(...params)
        if(Error.captureStackTrace){
            Error.captureStackTrace(this,ValidationError)
        }
        this.name = 'VALIDATION_ERROR'
        this.statusCode = 400
    }
}
module.exports = ValidationError