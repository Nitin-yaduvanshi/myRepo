class InternalServerError extends Error{
    constructor(...params){
      super(...params)
      if(Error.captureStackTrace){
        Error.captureStackTrace(this,InternalServerError)
        }
        this.name = "INTERNAL_SERVER_ERROR"
        this.statusCode = 500
    }
}
module.exports = InternalServerError