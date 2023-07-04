const { object } = require("joi")

class ObjectNotFoundError extends Error{
    constructor(...params){
        super(...params)
        if (Error.captureStackTrace){
            Error.captureStackTrace(this,ObjectNotFoundError)

        }
        this.name="OBJECT_NOT_FOUND_ERROR"
        this.statusCode=404
    }



};
module.exports=ObjectNotFoundError