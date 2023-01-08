const {mutipleMongooseToObject,mongooseToObject}=require('../../ulti/mongoose')// to Object
const {courses}=require('../models/Course')

class MeController
{
    ///[GET]/me/stored/courses
    storedCourses(req,res,next){
        courses.find({}) // find tim tat ca
            .then(Course=>{
                res.render('me/stored-courses',{Course:mutipleMongooseToObject(Course)});
            })
            .catch(next);  
    }
}
module.exports=new  MeController;