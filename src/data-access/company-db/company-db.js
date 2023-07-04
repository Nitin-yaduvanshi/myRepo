const TABALE_NAME = "company"
function makeCompanyDb({
    connection,
    DatabaseError
}){
    return Object.freeze({
        createCompany,
        deleteCompany,
        getCompany,
        updateCompany,
    })
    async function createCompany({name}){
        try {
            await connection.query(`INSERT INTO ${TABALE_NAME}(name) values(?)`,[name])
        } catch (error) {
            throw new DatabaseError(error)
        }
    }
    async function deleteCompany({id}){
        try {
            await connection.query(`DELETE FROM ${TABALE_NAME} WHERE id = ?`,[id])
        } catch (error) {
            throw new DatabaseError(error)
        }
    }
    async function getCompany(){
        try {
            return await connection.query(`SELECT * FROM ${TABALE_NAME}`)
        } catch (error) {
            throw new DatabaseError(error)
        }
    }
    async function updateCompany({name,id}){
        try {
            await connection.query(`UPDATE ${TABALE_NAME} SET name = ? WHERE id = ?`,[name,id])
        } catch (error) {
            throw new DatabaseError(error)
        }
    }
}
module.exports = makeCompanyDb