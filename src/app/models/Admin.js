const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const adminMain= new Schema({
        id:'string',
        name: 'string',
        introduce: 'string',
        image:{type:'string',required:true},
        permission:'string',
        slug:{ type: String, slug: 'name',unique:true, }, 
       // modelCourses:[modelCourses],
})

const expAdmin=mongoose.model('adminMain',adminMain);

module.exports=expAdmin;