const express = require('express');
const router = express.Router();

const coursesController=require("../app/controllers/CoursesController");


router.post('/store',coursesController.submit);
router.post('/stored',coursesController.submitModule);  
router.post('/storedlesson',coursesController.submitLesson);  

router.get('/create',coursesController.create);
router.get('/createModule',coursesController.createModule);
router.get('/createLesson',coursesController.createLesson);

router.get('/:id/edit',coursesController.edit);
router.delete('/:id/delete',coursesController.delete);
router.put('/:id',coursesController.update);
router.get('/',coursesController.index);



module.exports=router;

