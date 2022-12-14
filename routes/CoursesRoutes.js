//
const express =require('express')

//definir objeto de ruteo
const router = express.Router()

//crear rutas de bootcamps

//listar todos los bootcamps
router.get('/',(req, res)=>{
    res.status(200)
    .json({
        "success": true,
        "data":"Aqui van a salir todos los cursos"
    })
})
//Crear nuevo bootcamp
router.post('/',(req, res)=>{
    res.status(200)
    .json({
        "success": true,
        "data":"Aqui vamos a registrar los cursos"
    })
})

//Listar bootcamp por ID
router.get('/:id',(req, res)=>{
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":`Aqui va a salir el curso cuyo id es ${req.params.id}`
    })
})

//Actualizar bootcamp
router.put('/:id',(req, res)=>{
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":`Aqui se va a modificar el cuso cuyo id es ${req.params.id}`
    })
})
//Eliminar bootcamp
router.delete('/:id',(req, res)=>{
    console.log(req.params.id)
    res.status(200)
    .json({
        "success": true,
        "data":`Aqui se va a eliminar el cursos cuyo id es ${req.params.id}`
    })
})

module.exports = router