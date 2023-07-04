'use strict'

const sequelize = require('sequelize')
module.exports = {
    async up({context:queryInterface}){
        await queryInterface.createTable('user',{
            id:{
                allowNull:false,
                primaryKey:true,
                type: sequelize.DataTypes.INTEGER
            },
            name:{
                allowNull:false,
                type:sequelize.DataTypes.STRING
            },
            email:{
                allowNull:false,
                type: sequelize.DataTypes.STRING
            },
            mobile:{
                allowNull:false,
                type:sequelize.DataTypes.INTEGER
            },
            password:{
                allowNull:false,
                type:sequelize.DataTypes.STRING
            },
            companyId:{
                allowNull:false,
                references:{
                    model:'company',
                    key:'id'
                },
                onUpdate:'CASCADE',
                onDelete:'CASCADE',
                type:sequelize.DataTypes.INTEGER
            }
        })
    },
    async down({context:queryInterface}){
        await queryInterface.dropTable('company')
    }
}