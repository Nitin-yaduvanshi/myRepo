'use strict';

const sequelize = require('sequelize')
module.exports = {
    async up ({context:queryInterface}){
        await queryInterface.createTable('company',{
            id:{
                allowNull:false,
                autoIncrement:true,
                primaryKey:true,
                type: sequelize.DataTypes.INTEGER
            },
            name:{
                allowNull:false,
                type: sequelize.DataTypes.STRING
            }
        })
    },
    async down({context:queryInterface}){
        await queryInterface.dropTable('company')
    }
}