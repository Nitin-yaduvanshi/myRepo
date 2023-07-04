class DatabaseError extends Error{
    constructor(...params){
        super(...params)
        if(Error.captureStackTrace){
            Error.captureStackTrace(this,DatabaseError)
        }
        this.name = "DATABASE_ERROR"
        this.statusCode = 500
    }
}
module.exports = DatabaseError