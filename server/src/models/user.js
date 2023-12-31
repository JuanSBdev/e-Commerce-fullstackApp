const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('User', {
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty: {msg:'Name could not be null'}
            },    
        },
        
        
        email:{
            type:DataTypes.STRING,
            allowNull:true,
            unique:true,
            validate:{
                isEmail: {
                    args: true,
                    msg:'Invalid e-mail format'},
                notEmpty:{
                    args:true,
                    msg:`E-mail couln't be empty`
                },    
            },
        },
        country:{
            type:DataTypes.STRING,
            allowNull:true,
            
        },
        profile:{
            type:DataTypes.ENUM('Administrator','User'),
            allowNull:true,
            defaultValue:'User',
        },  
        address_st:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        address_num:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        department:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        
        zip:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },

        isActive:{
            type:DataTypes.BOOLEAN,
            defaultValue:true,
        },    
    },{timestamps:false});
};