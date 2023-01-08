const {mutipleMongooseToObject,mongooseToObject}=require('../../ulti/mongoose')// to Object
const modelCourses=require('../models/ModelCourses')
const LessonModuleCourses=require('../models/LessonModuleCourses')
const {courses}=require('../models/Course')

class LearningController
{
    // [GET/learning/:slug
    show(req,res,next){     
        courses.findOne({slug : req.params.slug})
            .then(course => {
                res.render('courses/show',{course:mongooseToObject(course)});
            })
            .catch(next)
    }
    // [GET]/learning/:slug:module
    module(req,res,next){  
        modelCourses.find({course:req.params.slug})
        .then(model=>{    
           res.render('learning/module',{model:mutipleMongooseToObject(model)}); 
        })
        .catch(next);
    }

    // [GET]/learning/:course/lesson/:module/:name
    name(req,res,next){
        var indexLessons;
        LessonModuleCourses.findOne({course:req.params.course,module:req.params.module,name:req.params.name,})// tra ve tham so tren link
        .then(lesson=>{   
            modelCourses.find({})
                .then(module=>{
                    res.render('learning/lesson',{lesson:mongooseToObject(lesson)});
                    
                })      
               
            
        })
        .catch(next);
    }
}
module.exports=new  LearningController;