function makeGetCompany({
companyDb,
ObjectNotFoundError
}){
    return async function getCompany(){
        try {
            const result=await companyDb.getCompany()
            if (result[0]){
                return result
            }
            else{
                throw new ObjectNotFoundError("Company not found")
            }
        } catch (error) {
            throw error
        }
    }
}
module.exports = makeGetCompany