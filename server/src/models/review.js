const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Review',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        description:{
            type:DataTypes.STRING,
            allowNul:false,
        },
        productId:{
            type:DataTypes.UUID,
            allowNul:false,
        },
        userId:{
            type:DataTypes.UUID,
            allowNul:false,
        },
        isActive:{
            type:DataTypes.BOOLEAN,
            defaultValue:true,
        },
    },{timestamps:false});
};