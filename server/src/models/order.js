const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Order',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
        },
        orderDate:{
            type:DataTypes.DATEONLY,
            allowNull:false,
            defaultValue:sequelize.NOW
        },
        status:{
            type:DataTypes.ENUM('confirmed','delivered','canceled'),
            allowNull:false,
            defaultValue:'confirmed',
        },
        total:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:true,
        },
        deliveredDate:{
            type:DataTypes.DATEONLY,
            allowNull:true,
        },
    },{timestamps:false});
}