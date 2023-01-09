const express = require('express');
const router = express.Router();
const LearningController=require("../app/controllers/LearningController");

router.get('/:slug',LearningController.show);
router.get('/:slug/module',LearningController.module);
router.get('/:course/lesson/:module/:name',LearningController.name);

module.exports=router;