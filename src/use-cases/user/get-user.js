function makeGetUser({
userDb,
ObjectNotFoundError
}){
    return async function getUser(){
        try {
            const result = await userDb.getUser()
            if(result[0]){
                return result
            }else{
                throw new ObjectNotFoundError("no User exist")
            }
        } catch (error) {
         throw error   
        }
    }
}
module.exports = makeGetUser