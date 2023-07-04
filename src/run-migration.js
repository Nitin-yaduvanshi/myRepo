const {Sequelize} = require("sequelize")
const config = require("./config")

const run = async () =>{
    const sequelize = new Sequelize(
        config.mySql.dbName,
        config.mySql.userName,
        config.mySql.password,
        {
            host:config.mySql.host,
            dialect: "mysql",
        })
        const { Umzug ,SequelizeStorage} = require("umzug")
        const umzug=new Umzug({
            migrations:{glob:`./migration/*.js`},
            context:sequelize.getQueryInterface(),
            storage:new SequelizeStorage({sequelize}),
        })
         await umzug.up();
         console.info('migration run successfully')
}

module.exports = run