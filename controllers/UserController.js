const sequelize = require('../config/seq')
//datatypes de sequilize
const { DataTypes} = require('sequelize')
//el modelo
const UserModel = require('../models/user')

//crear la entidad
const User = UserModel(sequelize, DataTypes)

exports.getAllUsers = async (req, res)=>{
    //traer los usuarios
    const users = await User.findAll();
    //response con los datos

    res.status(200)
    .json({
        "success": true,
        "data": users
    })
}

exports.getSingleUser = async (req, res)=>{
    const usersid = await User.findAll({
        where:{
            id:req.params.id
        }
    });
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":usersid
    })
}
exports.updateUser = async (req, res)=>{
    const useridUpdate = await User.update(req.body, {
        where: {
            id:req.params.id 
        }
      });
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":useridUpdate
    })
}

exports.deleteUser = async (req, res)=>{
    const useridDelete = await User.destroy({      
            where:{
                id:req.params.id
            }
    })
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":useridDelete
    })
}

exports.createUser = async (req, res)=>{
    
    const newUser = await User.create(req.body)
    res
    .status(200)
    .json({
        "success": true,
        "data":newUser
    })
}