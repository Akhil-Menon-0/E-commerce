const sequelize=require('sequelize')
const db=new sequelize('styleshop','styleshopper','money',{
    host:'localhost',
    dialect:'mysql'
})


const users=db.define('users',{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    username:{
        type:sequelize.STRING,
        allowNull:false
    },
    name:{
        type:sequelize.STRING,
        allowNull:false
    },
    password:{
        type:sequelize.STRING,
        allowNull:false
    }
})

const cart=db.define('cart',{
    id:{
        type:sequelize.INTEGER
    },
    item:{
        type:sequelize.STRING
    }
})


exports=module.exports={
    users
}