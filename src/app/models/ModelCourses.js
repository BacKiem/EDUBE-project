const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
// const slug = require('mongoose-slug-generator');
// mongoose.plugin(slug);
//Create Schema and model

// const modelCourses =new Schema({
//     id:'string',
//     name:'string',
//     slug:{ type: String, slug: 'name',unique:true, }, 
// })

const modelSchema= new Schema({
        id:'string',
        name: {type:'string',required:true},
        description: 'string',
        image:{type:'string',required:true},
        numberLesson:"string",
        course:{type:"string"},
        slugModule:{ type: String, slug: 'name' },
        // slug:{ type: String, slug: 'name',unique:true, }, 
       // modelCourses:[modelCourses],
})

const exportModelCourses=mongoose.model('modelcourses',modelSchema);

module.exports=exportModelCourses;