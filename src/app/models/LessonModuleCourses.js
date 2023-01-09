const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const lessonSchema= new Schema({
        id:'string',
        name: 'string',
        description: 'string',
        image:{type:'string',required:true},
        module:{ type: String, slug: 'module'},
        theory:"string",
        exercise:"string",
        course:{ type: String, slug: 'course'},
        slug:{ type: String, slug: 'module',unique:true, }, 
       // modelCourses:[modelCourses],
})

const explessonModuleCourses=mongoose.model('lessonModuleCourses',lessonSchema);

module.exports=explessonModuleCourses;