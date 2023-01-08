const adminMain=require('../models/Admin')
const {mutipleMongooseToObject}=require('../../ulti/mongoose')
class siteController
{
    ///[GET]/
    index(req,res,next){
        adminMain.find({})
            .then(dataAdmin => {
                res.render('home',{dataAdmins:mutipleMongooseToObject(dataAdmin)});
            })
            .catch(next)
       // 
    }
    // [GET]/:slug
    show(req,res){
        res.send('404');
    }

}
module.exports=new siteController;