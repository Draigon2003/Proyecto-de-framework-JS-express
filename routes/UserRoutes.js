

const express =require('express')
const {
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    createUser
} = require('../controllers/UserController')

//definir errores de routeo
const router = express.Router()

//crear rutas sin parametro
router.route('/')
            .get(getAllUsers)
            .post(createUser)

//crear rutas por id
router.route('/:id')
            .get(getSingleUser)
            .put(updateUser)
            .delete(deleteUser)

module.exports = router