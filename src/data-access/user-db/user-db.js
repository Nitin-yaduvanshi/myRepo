const TABALE_NAME = "user"
function makeUserDb({
    connection,
    DatabaseError
}){
    return Object.freeze({
        createUser,
        deleteUser,
        getUser,
        updateUser,
        getPassword,
    })
    async function createUser({name,email,mobile,passsword,companyId}){
        try {
            await connection.query(`INSERT INTO ${TABALE_NAME}(name,email,mobile,password,companyId) values(?,?,?,?,?)`,[name,email,mobile,passsword,companyId])
        } catch (error) {
            throw new DatabaseError(error)
        }
    }
    async function deleteUser({id}){
        try {
            await connection.query(`DELETE FROM ${TABALE_NAME} WHERE id = ?`,[id])
        } catch (error) {
            throw new DatabaseError(error)
        }
    }
    async function getUser(){
        try {
            const [result] = await connection.query(`SELECT * FROM ${TABALE_NAME}`)
            return result
        } catch (error) {
            throw new DatabaseError(error)
        }
    }
    async function updateUser({name,email, mobile,passsword,companyId,id}){
        try {
            await connection.query(`UPDATE ${TABALE_NAME} SET name = ?, email=?, mobile=?, password = ?, companyId = ? WHERE id = ?`,[name,email,mobile,passsword,companyId,id])
        } catch (error) {
            throw new DatabaseError(error)
        }
    }
    async function getPassword({name}){
        try {
            const [result] = await connection.query(`SELECT password FROM ${TABALE_NAME} WHERE name = ?`,[name])
            return result
        } catch (error) {
            throw new DatabaseError(error)
        }
    }
}
module.exports = makeUserDb