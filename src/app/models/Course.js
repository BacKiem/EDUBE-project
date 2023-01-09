const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);


const Course = new Schema(
    { 
        id:'string',
        name: {type:'string',required:true},
        description: 'string',
        author: 'string',
        image:{type:'string',required:true},
        star:'string',
        price:'string',
        numberOfModule:'string',
        slug:{ type: String, slug: 'name',unique:true, }, 
        updatedAt:{type:Date,default:Date.now},
        createddAt:{type:Date,default:Date.now}
    }
    ,
    {
        timestamps:true,
    }
);
const courses=mongoose.model('courses', Course)///tham so 1  '/edube/Collection' ,tham so 2 Schema
module.exports={courses};
