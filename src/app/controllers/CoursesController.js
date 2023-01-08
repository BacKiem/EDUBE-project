const {mutipleMongooseToObject,mongooseToObject}=require('../../ulti/mongoose')// to Object
const {courses}=require('../models/Course')
const moduleCourses=require('../models/ModelCourses')
const lessonModuleCourses=require('../models/LessonModuleCourses')


var numberOfModule;

class CourseController
{
    
    ///[GET]/course
    index(req,res,next){
        courses.find({}) // find tim tat ca
            .then(Course=>{
                res.render('courses',{Course:mutipleMongooseToObject(Course)});
            })
            .catch(next);  
    }
    ///[GET]/courses/create
    create(req,res,next){     
        res.render('courses/create');
    }
    //[GET]/courses/createModule
    createModule(req,res,next){
        res.render('courses/createModule');
    }
    //[GET]/courses/createLesson
    createLesson(req,res,next)
    {
        res.render('courses/createLesson');

    }
    ///[GET]/courses/:id/edit
     edit(req,res,next){
        courses.findById(req.params.id)
        .then(course => {
            res.render('courses/edit');
        })
        .catch(next)
    }
    //[PUT]/courses/:id
    update(req,res,next){
        courses.updateOne({_id:req.params.id},req.body)
            .then(()=>res.redirect('/me/stored/courses'))
            .catch(next)
    }
    //[DELETE]/courses/:id/delete
    delete(req,res,next){
        courses.deleteOne({_id : req.params.id})
            .then(()=>{res.redirect('back')})
            .catch(next)
    }
   
    ///[POST]/courses/store
    submit(req,res,next){ 
        const formData=req.body;
        numberOfModule=req.body.numberOfModule;
        const course =new courses(formData)// tao doi tuong moi
        course.save()
            .then(()=>res.render('/')) // update data
            .catch(error=>{
                
            });
        res.redirect('/courses/createModule');
    }
   ///[POST]/courses/stored
   submitModule(req,res,next){ 
    const formData=req.body;
    const moduleCourseNew =new moduleCourses(formData)// tao doi tuong moi
    moduleCourseNew.save()
        .then(()=>res.render('/')) // update data
        .catch(error=>{
            
        });
            res.redirect('/courses/createModule');
    }
    // [POST]/courses/storedlesson
    submitLesson(req,res,next){ 
        const formData=req.body;
        const lessonModuleCoursesNew =new lessonModuleCourses(formData)// tao doi tuong moi
        lessonModuleCoursesNew.save()
            .then(()=>res.render('/')) // update data
            .catch(error=>{
                
            });
                res.redirect('/courses/createLesson');
        }
}
module.exports=new  CourseController;