const express=require('express')
const router=express.Router()
const dataController=require('../controller/data_controller');

// router.post('/add-data',dataController.addData)
router.post('/create-data',dataController.createData)
router.get('/get-data',dataController.getData);
router.get('/get-specific/:id',dataController.getByid);
router.delete('/get-specific/:id',dataController.getByidDelete);


module.exports=router